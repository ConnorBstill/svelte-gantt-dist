export interface RowModel {
    id: number | string;
    label: string;
    classes?: string | string[];
    contentHtml?: string;
    enableDragging?: boolean;
    height: number;
    /** Child rows in expandable tree */
    children?: RowModel[];
    /** Content of row header, html string */
    headerHtml?: string;
    /** Class of icon in row header */
    iconClass?: string;
    /** Url of image in row header */
    imageSrc?: string;
    expanded?: boolean;
}
export interface SvelteRow {
    model: RowModel;
    y: number;
    height: number;
    hidden?: boolean;
    children?: SvelteRow[];
    allChildren?: SvelteRow[];
    parent?: SvelteRow;
    allParents?: SvelteRow[];
    expanded?: boolean;
    childLevel?: number;
    rowIndex?: number;
}
export declare class RowFactory {
    rowHeight: number;
    constructor();
    createRow(row: RowModel, y: number): SvelteRow;
    createRows(rows: RowModel[]): any[];
    createChildRows(rowModels: RowModel[], ctx: {
        y: number;
        result: SvelteRow[];
    }, parent?: SvelteRow, level?: number, parents?: SvelteRow[]): {
        rows: any[];
        allRows: any[];
    };
}
