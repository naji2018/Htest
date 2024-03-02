// const t7Value = document.getElementById("t7").value;
document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("output");

  function selectOptionByValue(selectElementId, value) {
    const selectElement = document.getElementById(selectElementId);
    selectElement.value = value;
  }

  function processData1() {
    const t1Value = document.getElementById("t1").value;
    const t2Value = document.getElementById("t2").value;
    const t3Value = document.getElementById("t3").value;
    const t4Value = document.getElementById("t4").value;
    const t5Value = document.getElementById("t5").value;

    if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Unrealted";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Unlocked + Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny DGPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny DGPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalte";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Process With compromised account";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Deny + Check bot";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "otherissue");
      result.innerHTML = "process with compromised account";
    }

    if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Unrealted";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Unlocked + Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny DGPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny DGPR";
    } else if (
      t1Value === "deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalte";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Process With compromised account";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "locked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Deny + Check bot";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "eligible" &&
      t3Value === "not compromised" &&
      t4Value === "protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      t1Value === "Not deflected" &&
      t2Value === "not eligible" &&
      t3Value === "compromised" &&
      t4Value === "not protected" &&
      t5Value === "Unlocked"
    ) {
      selectOptionByValue("t6", "GDPR");
      result.innerHTML = "process with compromised account";
    }
  }

  const myButton = document.getElementById("click1");
  myButton.addEventListener("click", processData1);
});

document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("output1");

  function selectOptionByValue(selectElementId, value) {
    const selectElement = document.getElementById(selectElementId);
    selectElement.value = value;
  }

  function processData() {
    const Tt2Value = document.getElementById("tt1").value;
    const Tt3Value = document.getElementById("tt2").value;
    const Tt4Value = document.getElementById("tt3").value;
    const Tt5Value = document.getElementById("tt4").value;

    if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Unrealted";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Unlocked + Deny GDPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      t4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny DGPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny DGPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalte";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Process With compromised account";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Deny + Check bot";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "OtherIsusse");
      result.innerHTML = "process with compromised account";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalte to Unlocked";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Unrealted";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Unlocked + Deny GDPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny DGPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny DGPR";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "check bot";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Esclated";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Unlocked + deny GDPR";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "ESclate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalte";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Process With compromised account";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "locked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Deny + Check bot";
    } else if (
      Tt2Value === "eligible" &&
      Tt3Value === "not compromised" &&
      Tt4Value === "protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "Escalate";
    } else if (
      Tt2Value === "not eligible" &&
      Tt3Value === "compromised" &&
      Tt4Value === "not protected" &&
      Tt5Value === "Unlocked"
    ) {
      selectOptionByValue("tt5", "GDPR");
      result.innerHTML = "process with compromised account";
    }
  }

  const myButton = document.getElementById("click2");
  myButton.addEventListener("click", processData);
});
