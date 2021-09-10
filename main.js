// VIEW SWAPPING

const $monTab = document.querySelector('.tab.mon');
const $monBody = document.querySelector('.table-container.mon');
$monTab.addEventListener('click', viewSwap);

const $tuesTab = document.querySelector('.tab.tues');
const $tuesBody = document.querySelector('.table-container.tues');
$tuesTab.addEventListener('click', viewSwap);

const $wedTab = document.querySelector('.tab.wed');
const $wedBody = document.querySelector('.table-container.wed');
$wedTab.addEventListener('click', viewSwap);

const $thursTab = document.querySelector('.tab.thurs');
const $thursBody = document.querySelector('.table-container.thurs');
$thursTab.addEventListener('click', viewSwap);

const $friTab = document.querySelector('.tab.fri');
const $friBody = document.querySelector('.table-container.fri');
$friTab.addEventListener('click', viewSwap);

const $satTab = document.querySelector('.tab.sat');
const $satBody = document.querySelector('.table-container.sat');
$satTab.addEventListener('click', viewSwap);

const $sunTab = document.querySelector('.tab.sun');
const $sunBody = document.querySelector('.table-container.sun');
$sunTab.addEventListener('click', viewSwap);

function viewSwap(event) {
  $monBody.classList.add('hidden');
  $tuesBody.classList.add('hidden');
  $wedBody.classList.add('hidden');
  $thursBody.classList.add('hidden');
  $friBody.classList.add('hidden');
  $satBody.classList.add('hidden');
  $sunBody.classList.add('hidden');

  if (event.target === $monTab) {
    $monBody.classList.remove('hidden');
  } if (event.target === $tuesTab) {
    $tuesBody.classList.remove('hidden');
  } if (event.target === $wedTab) {
    $wedBody.classList.remove('hidden');
  } if (event.target === $thursTab) {
    $thursBody.classList.remove('hidden');
  } if (event.target === $friTab) {
    $friBody.classList.remove('hidden');
  } if (event.target === $satTab) {
    $satBody.classList.remove('hidden');
  } if (event.target === $sunTab) {
    $sunBody.classList.remove('hidden');
  }
}
