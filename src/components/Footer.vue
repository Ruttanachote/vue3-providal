<template>
  <div>
    <footer class="bg-footer">
      <div class="container">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" class="mb-3" />
            <H1 class="text-left text-white">DEDA</H1>
            <p class="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="pinterest"
                  ><i class="fa fa-pinterest"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="vimeo"
                  ><i class="fa fa-vimeo"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 text-head">
              NAVIGATION
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><a href="#" class="text-muted">Home</a></li>
              <li class="mb-2">
                <a href="#" class="text-muted">White Paper</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">NFT Marketplace</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 text-head">
              ABOUT
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">Partnerships</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">Discovery DEDA</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">Roadmap</a></li>
              <li class="mb-2">
                <a href="#" class="text-muted">Ecosytem</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 text-head">
              TOKEN
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">How to buy</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">Chart</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4 text-head">
              USE ETHEREUM
            </h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">DEDA wallet</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">Get DEDA</a></li>
              <li class="mb-2">
                <a href="#" class="text-muted">Stake DEDA</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted"
                  >Decentralized applications (dapps)</a
                >
              </li>
            </ul>
          </div>
          <!-- <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p class="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <!-- Copyrights -->
      <div class="bg-footer-2 py-4">
        <div class="container text-center">
          <p class="mb-0 py-2 text-footer">
            © 2021  DecentralizedData.io All right reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bg-footer {
  text-align: left;
  // background: linear-gradient(270deg, #ff6cb5 17.71%, #41afff 100%);
  background: #1f2937;
  box-shadow: 0px 10px 20px rgba(55, 55, 89, 0.08);
  border: 1px solid #312f62;
}

.bg-footer-2 {
  background: #111827;
}
.text-head {
  /* Headline6 */
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height */
  letter-spacing: 0.03em;
  color: #ffffff;
  opacity: 0.6;
}

.text-footer {
  background: linear-gradient(270deg, #879aff 0%, #fc7fb3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 600;
}

.text-muted {
  font-style: normal;
  font-weight: 500;
  color: #ffffff !important;
  font-size: 16px;
}

#button-addon1 {
  color: #ffc371;
}

i {
  color: #ffc371;
}

.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}

.form-control.shadow-0:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  .bg-footer-2 {
    margin-bottom: 3rem;
  }
}
</style>
