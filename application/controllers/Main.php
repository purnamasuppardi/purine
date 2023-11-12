<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Main extends CI_Controller
{
    public function index()
    {
        $this->load->view('template/header');
        $this->load->view('main/home');
        $this->load->view('template/footer');
    }
}
