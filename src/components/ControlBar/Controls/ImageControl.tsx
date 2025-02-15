import { useAtom, useAtomValue } from "jotai";
import React, { useCallback } from "react";
import Download from "../../../assets/icons/download.svg?react";
import {
  imageFormatAtom,
  imageRefAtom,
  imageScaleAtom,
} from "../../../store/control-settings";
import createImage, { ImageType } from "../../../utils/create-image";

import $ from "./Controls.module.scss";
import SCALES from "../../../constants/scales";
import SettingWrapper from "../../SettingWrapper/SettingWrapper";
import OptionsDropdown from "../../OptionsDropdown/OptionsDropdown";
import Button from "../../Button/Button";

const FORMATS: ImageType[] = ["png", "svg"];

const ImageControl: React.FC = () => {
  const imageRef = useAtomValue(imageRefAtom);
  const [scale, setScale] = useAtom(imageScaleAtom);
  const [format, setFormat] = useAtom(imageFormatAtom);

  const handleDownload = useCallback(
    (overwrittenFormat?: ImageType) => {
      if (imageRef?.current) {
        createImage(
          imageRef.current,
          overwrittenFormat ? overwrittenFormat : format,
          scale
        );
      }
    },
    [format, scale, imageRef]
  );

  if (!imageRef) return null;

  return (
    <OptionsDropdown icon={<Download />} onClick={handleDownload}>
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
        <SettingWrapper title="Download as">
          <div className={$.row}>
            {FORMATS.map((f) => (
              <Button
                key={f}
                onClick={() => {
                  setFormat(f);
                  handleDownload(f);
                }}
                size="small"
                type={f === format ? "primary" : "default"}
              >
                {f.toLocaleUpperCase()}
              </Button>
            ))}
          </div>
        </SettingWrapper>
      </div>
    </OptionsDropdown>
  );
};

export default ImageControl;
