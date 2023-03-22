export interface SidebarItemType {
    path: string,
    text: string
    IconLink: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}
