export default function (rg:string): boolean {

    if (!rg.match(/[^0-9.]/) || rg.length > 9 || rg.length < 5) return false

    return true;
}