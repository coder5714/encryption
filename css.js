class CSS extends HTMLElement{
    constructor(){
        this.innerHTML = `
    <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #121212;
      font-family: Arial, sans-serif;
      color: #e0e0e0;
      text-align: center;
      padding: 40px 20px;
    }

    h1 {
      color: rgb(2, 255, 48);
      font-size: 48px;
      margin-bottom: 20px;
    }

    textarea {
      width: 80%;
      min-height: 100px;
      background-color: #1e1e1e;
      color: #e0e0e0;
      border: 1px solid #444;
      border-radius: 5px;
      padding: 12px;
      font-size: 16px;
      resize: vertical;
    }

    textarea[readonly] {
      background-color: #2e2e2e;
    }

    .button-group {
      margin: 20px 0;
    }

    button {
      margin: 8px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #6200ea;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #3700b3;
    }

    .output p {
      font-weight: bold;
      margin-top: 20px;
    }

    .download-readme {
      margin-top: 40px;
    }
  </style>
        `
    }
}
customElements.define('CSS',CSS)