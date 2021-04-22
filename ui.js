class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid rounded-circle mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="blank">View Profile</a>
                </div>
                <div class="col-md-9">
                    <h3 class="page-heading mb-3">${user.name}</h3>
                    <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
                    
                    <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
                    
                    <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
                    
                    <span class="badge badge-info mb-1">Following: ${user.followings}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Mermber Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
                    
                    <span class="badge badge-secondary mb-1">Watchers: ${repo.watchers_count}</span>
                    
                    <span class="badge badge-success mb-1">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
          `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Creat a div
    const div = document.createElement("div");
    // Add class
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(`${message}`));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);
    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
