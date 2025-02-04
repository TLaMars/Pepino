import { useAtom, useAtomValue } from "jotai";
import React, { useCallback } from "react";
import Download from "src/assets/icons/download.svg";
import Button from "src/components/Button/Button";
import OptionsDropdown from "src/components/OptionsDropdown/OptionsDropdown";
import SettingWrapper from "src/components/SettingWrapper/SettingWrapper";
import {
  imageFormatAtom,
  imageRefAtom,
  imageScaleAtom,
} from "src/store/control-settings";
import createImage, { ImageType } from "src/utils/create-image";

import $ from "./Controls.module.scss";

const FORMATS: ImageType[] = ["png", "svg"];

const SCALES = [
  {
    label: "1x",
    value: 1,
  },
  {
    label: "2x",
    value: 2,
  },
  {
    label: "4x",
    value: 4,
  },
  {
    label: "8x",
    value: 8,
  },
];

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
        <SettingWrapper title="Download as  ">
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
