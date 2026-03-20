import type { IwpStateShape } from "../store/types";

export function onReaderScroll(
  state: IwpStateShape,
  scrollRatio: number,
): void {
  // @iwp.link logic/docs/on_reader_scroll.md::n.07b5
  // @iwp.link logic/docs/on_reader_scroll.md::n.6f1b
  // @iwp.link logic/docs/on_reader_scroll.md::n.8ce8
  // @iwp.link logic/docs/on_reader_scroll.md::n.9165
  // @iwp.link logic/docs/on_reader_scroll.md::n.99e1
  // @iwp.link logic/docs/on_reader_scroll.md::n.e10a
  const ratio = Math.max(0, Math.min(scrollRatio, 1));
  state.readerScrollRatio = ratio;
}
