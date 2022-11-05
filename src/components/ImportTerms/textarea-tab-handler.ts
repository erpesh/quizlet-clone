import React from "react";

const textareaTabHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>, textareaRef: any) => {
  if (e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    const value = textareaRef.current!.value;
    const selectionStart = textareaRef.current!.selectionStart;
    const selectionEnd = textareaRef.current!.selectionEnd;
    textareaRef.current!.value =
      value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
    textareaRef.current!.selectionStart = selectionEnd + 4 - (selectionEnd - selectionStart);
    textareaRef.current!.selectionEnd = selectionEnd + 4 - (selectionEnd - selectionStart);
  }
  if (e.key === 'Tab' && e.shiftKey) {
    e.preventDefault();
    const value = textareaRef.current!.value;
    const selectionStart = textareaRef.current!.selectionStart;
    const selectionEnd = textareaRef.current!.selectionEnd;

    const beforeStart = value
      .substring(0, selectionStart)
      .split('')
      .reverse()
      .join('');
    const indexOfTab = beforeStart.indexOf('\t');
    const indexOfNewline = beforeStart.indexOf('\n');

    if (indexOfTab !== -1 && indexOfTab < indexOfNewline) {
      textareaRef.current!.value =
        beforeStart
          .substring(indexOfTab + 4)
          .split('')
          .reverse()
          .join('') +
        beforeStart
          .substring(0, indexOfTab)
          .split('')
          .reverse()
          .join('') +
        value.substring(selectionEnd);

      textareaRef.current!.selectionStart = selectionStart - 4;
      textareaRef.current!.selectionEnd = selectionEnd - 4;
    }
  }
}
export default textareaTabHandler;