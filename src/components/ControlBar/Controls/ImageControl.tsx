import { isTauri } from "@tauri-apps/api/core";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useCallback } from "react";
import Download from "src/assets/icons/download.svg?react";
import File from "src/assets/icons/file.svg?react";
import Button from "src/components/Button/Button";
import OptionsDropdown from "src/components/OptionsDropdown/OptionsDropdown";
import SettingWrapper from "src/components/SettingWrapper/SettingWrapper";
import SCALES from "src/constants/scales";
import useShortcut from "src/hooks/use-shortcut";
import {
  imageRefAtom,
  imageScaleAtom,
  notificationAtom,
} from "src/store/control-settings";
import { clipboardPng, savePng, saveSvg } from "src/utils/create-image";

import $ from "./Controls.module.scss";

const ImageControl: React.FC = () => {
  const imageRef = useAtomValue(imageRefAtom);
  const [scale, setScale] = useAtom(imageScaleAtom);
  const setNotification = useSetAtom(notificationAtom);

  useShortcut({
    shortcut: "CommandOrControl+C",
    onPress: async () => {
      if (!isTauri() || !imageRef?.current) return;

      setNotification({ message: "Copying to clipboard", icon: <File /> });
      await clipboardPng({ element: imageRef.current, scale });
      setNotification({ message: "Copied to clipboard", icon: <File /> });
    },
    preventDefault: true,
  });

  const downloadPng = useCallback(async () => {
    if (imageRef?.current) {
      await savePng({
        element: imageRef.current,
        scale,
        filename: "Pepino",
      });
    }
  }, [scale, imageRef]);

  const downloadSvg = useCallback(async () => {
    if (imageRef?.current) {
      await saveSvg({
        element: imageRef.current,
        filename: "Pepino",
      });
    }
  }, [imageRef]);

  if (!imageRef) return null;

  return (
    <OptionsDropdown icon={<Download />} onClick={downloadPng}>
      <div className={$.column}>
        <SettingWrapper title="Scale">
          <div className={$.row}>
            {SCALES.map((s) => (
              <Button
                key={s.value}
                onClick={() => setScale(s.value)}
                size="small"
                type={s.value === scale ? "primary" : "default"}
              >
                {s.label}
              </Button>
            ))}
          </div>
        </SettingWrapper>
        {!isTauri() && (
          <SettingWrapper title="Download as">
            <div className={$.row}>
              <Button onClick={downloadPng} size="small">
                PNG
              </Button>
              <Button onClick={downloadSvg} size="small">
                SVG
              </Button>
            </div>
          </SettingWrapper>
        )}
      </div>
    </OptionsDropdown>
  );
};

export default ImageControl;
