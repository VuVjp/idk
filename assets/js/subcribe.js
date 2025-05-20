document.getElementById("subcribe-submit").addEventListener("click", doSubcribe);

async function doSubcribe() {
    const f = await fetch("/api/subcribe.php", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `subcriber=${document.getElementById("exampleInputEmail1").value}`
    });

    if (!f.ok) {
        alert("Không thể đăng kí!");
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