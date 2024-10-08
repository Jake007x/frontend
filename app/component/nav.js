
import Link from "next/link";

export default function Nav() {
  return (
    <>
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <div className="container">
            <img src="/img/p.png" alt="Logo" height="60" />
            <p>Calibur</p>
            </div>
            </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary">หน้าแรก</a></li>
           
            <li class="nav-item">
          
        </li>
        
        
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> บริการ
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" ><Link href="/users" class="nav-link px-2">เปรียบเทียบ</Link></a></li>
            <li><a class="dropdown-item" href="#">ปัญหา</a></li>
            <li><a class="dropdown-item" href="#">ช่วยเหลือ</a></li>
          </ul>
      
        </li>
            <Link href="/contact" class="nav-link">ติดต่อ</Link>
            <li><Link href="/about" class="nav-link px-2">เพิ่มเติม</Link></li>
            <a href="#" class="btn btn-outline-success" ><Link href="" class="nav-link px-2">Sing in</Link></a>
            &nbsp; &nbsp; <a href="#" class="btn btn-outline-success" ><Link href="/signup" class="nav-link px-2">Sing up</Link></a> &nbsp;
        </ul>
        
        </header>
        
    </>
  );
}
