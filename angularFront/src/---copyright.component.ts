
"use strict";
function printCopyright() {
    const copyright = new Date();
    const update = copyright.getFullYear();
    return document.write("©" + update + " " + "L F S ?");
}
;

export class CopyrightComponent {
  title = 'printCopyright';



}
