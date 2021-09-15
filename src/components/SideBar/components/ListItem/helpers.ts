import { CSSProperties } from 'react';
import { FilesTree, FileType } from '../../../../types';

export const getLeftPadding = (
  style: CSSProperties | undefined
): CSSProperties['paddingLeft'] | undefined | null => {
  if (!style) return null;

  let itemPadding: CSSProperties['paddingLeft'];

  if (style && style.paddingLeft) {
    itemPadding = style.paddingLeft.toString();
  }

  return itemPadding;
};

export const getSideBarUpperItemStyle = (
  style: CSSProperties | undefined,
  parentId: FilesTree['parentId'],
  pixelsToAdd: number
) => {
  const itemPadding = getLeftPadding(style);
  return {
    ...style,
    ...(parentId && itemPadding
      ? { paddingLeft: +itemPadding + pixelsToAdd }
      : {}),
  };
};

export const getSideBarLowerItemStyle = (style: CSSProperties | undefined) => {
  const itemPadding = getLeftPadding(style);
  return { paddingLeft: +(itemPadding || 0) + 20 };
};

export const shouldRenderInnerList = (
  listLength: number | undefined,
  isLoading: boolean,
  isOpen: boolean
): boolean => !!listLength && !isLoading && isOpen;

export const getFileType = (fileName: string): FileType => {
  const isExtention = fileName.replace(/\s/g, '').split('.').length === 2;
  return isExtention ? FileType.document : FileType.directory;
};
