let hiddenProjects = false
let hiddenBlurbs = true

const hideOrShowBlurb = function (projectID) {
  // change project to 500px??;
  // show blurbs
  if (hiddenBlurbs === true) {
    hiddenBlurbs = false
    if (projectID === 'p-1') {
      $('#h-1').show()
    }
    if (projectID === 'p-2') {
      $('#h-2').show()
    }
    if (projectID === 'p-3') {
      $('#h-3').show()
    }
    if (projectID === 'p-4') {
      $('#h-4').show()
    }
    if (projectID === 'p-5') {
      $('#h-5').show()
    }
    if (projectID === 'p-6') {
      $('#h-6').show()
    }
  }
  // hide blurbs
  else if (hiddenBlurbs === false) {
    hiddenBlurbs = true
    if (projectID === 'p-1') {
      $('#h-1').hide()
    }
    if (projectID === 'p-2') {
      $('#h-2').hide()
    }
    if (projectID === 'p-3') {
      $('#h-3').hide()
    }
    if (projectID === 'p-4') {
      $('#h-4').hide()
    }
    if (projectID === 'p-5') {
      $('#h-5').hide()
    }
    if (projectID === 'p-6') {
      $('#h-6').hide()
    }
  }
}

const hideOrShowProjects = function (event) {
  event.preventDefault()
  const projectID = event.target.id
  // hide projects
  if (hiddenProjects === false) {
    hiddenProjects = true
    if (projectID === 'p-1') {
      $('#p-2').hide('slow')
      $('#p-3').hide('slow')
      $('#p-4').hide('slow')
      $('#p-5').hide('slow')
      $('#p-6').hide('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-2') {
      $('#p-1').hide('slow')
      $('#p-3').hide('slow')
      $('#p-4').hide('slow')
      $('#p-5').hide('slow')
      $('#p-6').hide('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-3') {
      $('#p-2').hide('slow')
      $('#p-1').hide('slow')
      $('#p-4').hide('slow')
      $('#p-5').hide('slow')
      $('#p-6').hide('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-4') {
      $('#p-2').hide('slow')
      $('#p-3').hide('slow')
      $('#p-1').hide('slow')
      $('#p-5').hide('slow')
      $('#p-6').hide('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-5') {
      $('#p-2').hide('slow')
      $('#p-3').hide('slow')
      $('#p-4').hide('slow')
      $('#p-1').hide('slow')
      $('#p-6').hide('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-6') {
      $('#p-2').hide('slow')
      $('#p-3').hide('slow')
      $('#p-4').hide('slow')
      $('#p-5').hide('slow')
      $('#p-1').hide('slow')
      hideOrShowBlurb(projectID)
    }
  }
  // show projects
  else if (hiddenProjects === true) {
    hiddenProjects = false
    if (projectID === 'p-1') {
      $('#p-2').show('slow')
      $('#p-3').show('slow')
      $('#p-4').show('slow')
      $('#p-5').show('slow')
      $('#p-6').show('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-2') {
      $('#p-1').show('slow')
      $('#p-3').show('slow')
      $('#p-4').show('slow')
      $('#p-5').show('slow')
      $('#p-6').show('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-3') {
      $('#p-2').show('slow')
      $('#p-1').show('slow')
      $('#p-4').show('slow')
      $('#p-5').show('slow')
      $('#p-6').show('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-4') {
      $('#p-2').show('slow')
      $('#p-3').show('slow')
      $('#p-1').show('slow')
      $('#p-5').show('slow')
      $('#p-6').show('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-5') {
      $('#p-2').show('slow')
      $('#p-3').show('slow')
      $('#p-4').show('slow')
      $('#p-1').show('slow')
      $('#p-6').show('slow')
      hideOrShowBlurb(projectID)
    }
    if (projectID === 'p-6') {
      $('#p-2').show('slow')
      $('#p-3').show('slow')
      $('#p-4').show('slow')
      $('#p-5').show('slow')
      $('#p-1').show('slow')
      hideOrShowBlurb(projectID)
    }
  }
}

$(() => {
  $('#h-1').hide()
  $('#h-2').hide()
  $('#h-3').hide()
  $('#h-4').hide()
  $('#h-5').hide()
  $('#h-6').hide()
  $('#p-1').on('click', hideOrShowProjects)
  $('#p-2').on('click', hideOrShowProjects)
  $('#p-3').on('click', hideOrShowProjects)
  $('#p-4').on('click', hideOrShowProjects)
  $('#p-5').on('click', hideOrShowProjects)
  $('#p-6').on('click', hideOrShowProjects)
})
