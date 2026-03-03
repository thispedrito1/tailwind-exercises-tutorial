const fs=require("fs");
const path=require("path");
const html=fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

jest.dontMock("fs");

describe("All the tests should pass", function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();

    });
    afterEach(() => {
        jest.resetModules();
    });
    it("You should not change or delete the existing elements in the <head> tag", function () {
        let head = document.querySelector('head')
        expect(head).toBeTruthy();

        let meta1 = head.innerHTML.toString().indexOf("<meta c")
        let meta2 = head.innerHTML.toString().indexOf("<meta n")
        let title = head.querySelector("title")

        expect(meta1).not.toBe(-1)
        expect(meta2).not.toBe(-1)
        expect(title).not.toBe(null)
    })
});

describe('1. The html code should contain the Tailwind CDN script and a red button using utility classes', function () {
    beforeEach(() => {
        //here I import the HTML into the document
        document.documentElement.innerHTML=html.toString();
    });
    afterEach(() => {jest.resetModules();});
    it('The <head> tag should contain the Tailwind CDN <script> tag', function () {
        let bodyContent=document.querySelector("head").innerHTML
        expect(bodyContent.toString().indexOf(`<script src="https://cdn.tailwindcss.com"></script>`)>-1).toBeTruthy();
    });
    it('The button should have Tailwind classes to look red', function () {
        let button = document.querySelector('button')

        expect(button).toBeTruthy()
        expect(button.classList.contains('bg-red-500')).toBeTruthy()
        expect(button.classList.contains('text-white')).toBeTruthy()
    });
});
