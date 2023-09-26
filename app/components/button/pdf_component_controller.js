import { jsPDF } from "jspdf";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["generateButton", "pdfContent"]
  
  connect() {
    // console.log("Hello, Stimulus!", this.pdfContentTarget);
  }

  generate() {
    var doc = new jsPDF("p", "mm", [500, 300])
    doc.html(this.pdfContentTarget).then(() => doc.save("output.pdf"))
  }
}
