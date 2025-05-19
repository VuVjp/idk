document.getElementById("form-submit").addEventListener("click", doContact);

async function doContact() {
    const f = await fetch("/api/contact.php", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `name=${document.getElementById("name").value}&surname=${document.getElementById("surname").value}&email=${document.getElementById("email").value}&subject=${document.getElementById("subject").value}&message=${document.getElementById("message").value}`
    });

    if (!f.ok) {
        alert("Không thể liên hệ!");
        return;
    }

    const resp = await f.json();

    if (!resp["code"]) {
        alert(`Lỗi: ${resp["msg"]}`);
        return;
    }

    alert(resp["msg"]);
    return;
}