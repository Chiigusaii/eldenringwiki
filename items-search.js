/**
 * ELDEN RING WIKI - GLOBAL SEARCH SYSTEM
 * Auto-opens modals when redirected from search
 */

const wikiSearchDatabase = {
  characters: [
    { name: "Melina", subtitle: "Kindling Maiden", category: "Roundtable Hold", page: "characters.html", id: "melina", icon: "ra-player" },
    { name: "Ranni the Witch", subtitle: "Lunar Princess", category: "Questline NPC", page: "characters.html", id: "ranni", icon: "ra-crystal-wand" },
    { name: "Blaidd", subtitle: "Half-Wolf Warrior", category: "Questline NPC", page: "characters.html", id: "blaidd", icon: "ra-wolf-head" },
    { name: "Fia", subtitle: "Deathbed Companion", category: "Roundtable Hold", page: "characters.html", id: "fia", icon: "ra-player" },
    { name: "D, Hunter of the Dead", subtitle: "Twinned Knight", category: "Roundtable Hold", page: "characters.html", id: "d-hunter", icon: "ra-knight-helmet" },
    { name: "Rogier", subtitle: "Spellblade", category: "Roundtable Hold", page: "characters.html", id: "rogier", icon: "ra-sword" },
    { name: "Nepheli Loux", subtitle: "Warrior", category: "Roundtable Hold", page: "characters.html", id: "nepheli", icon: "ra-axe" },
    { name: "Gideon Ofnir", subtitle: "The All-Knowing", category: "Roundtable Hold", page: "characters.html", id: "gideon", icon: "ra-book" },
    { name: "Corhyn", subtitle: "Brother Corhyn", category: "Roundtable Hold", page: "characters.html", id: "corhyn", icon: "ra-sun" },
    { name: "Dung Eater", subtitle: "Loathsome Eater", category: "Roundtable Hold", page: "characters.html", id: "dung-eater", icon: "ra-skull" },
    { name: "Hewg", subtitle: "Blacksmith", category: "Roundtable Hold", page: "characters.html", id: "hewg", icon: "ra-anvil" },
    { name: "Roderika", subtitle: "Spirit Tuner", category: "Roundtable Hold", page: "characters.html", id: "roderika", icon: "ra-fairy" },
    { name: "Alexander", subtitle: "Iron Fist", category: "Questline NPC", page: "characters.html", id: "alexander", icon: "ra-large-hammer" },
    { name: "Millicent", subtitle: "Valkyrie Disciple", category: "Questline NPC", page: "characters.html", id: "millicent", icon: "ra-player" },
    { name: "Sellen", subtitle: "Sorceress", category: "Questline NPC", page: "characters.html", id: "sellen", icon: "ra-crystal-ball" },
    { name: "Patches", subtitle: "Untethered", category: "Questline NPC", page: "characters.html", id: "patches", icon: "ra-spider-face" },
    { name: "Varre", subtitle: "White Mask", category: "Questline NPC", page: "characters.html", id: "varre", icon: "ra-bleeding-eye" },
    { name: "Yura", subtitle: "Bloody Finger Hunter", category: "Questline NPC", page: "characters.html", id: "yura", icon: "ra-sword" },
    { name: "Tanith", subtitle: "Volcano Manor Hostess", category: "Questline NPC", page: "characters.html", id: "tanith", icon: "ra-player" },
    { name: "Rya", subtitle: "Scout Zorayas", category: "Questline NPC", page: "characters.html", id: "rya", icon: "ra-snake" },
    { name: "Kale", subtitle: "Church of Elleh Merchant", category: "Merchant", page: "characters.html", id: "kale", icon: "ra-wooden-sign" },
    { name: "Blackguard Big Boggart", subtitle: "Prawn & Crab Vendor", category: "Merchant", page: "characters.html", id: "boggart", icon: "ra-crab" },
    { name: "Gurranq", subtitle: "Beast Clergyman", category: "Questline NPC", page: "characters.html", id: "gurranq", icon: "ra-lion" },
    { name: "Miriel", subtitle: "Pastor of Vows (Turtle Pope)", category: "Minor NPC", page: "characters.html", id: "miriel", icon: "ra-turtle" },
    { name: "Torrent", subtitle: "Spectral Steed", category: "Companions", page: "characters.html", id: "torrent", icon: "ra-horseshoe" },
    { name: "Needle Knight Leda", subtitle: "Miquella's Knight", category: "DLC", page: "characters.html", id: "leda", icon: "ra-knight-helmet" },
    { name: "Thiollier", subtitle: "St. Trina Devotee", category: "DLC", page: "characters.html", id: "thiollier", icon: "ra-player" },
    { name: "Miquella", subtitle: "The Kind", category: "DLC", page: "characters.html", id: "miquella", icon: "ra-sun" },
  ],
  bosses: [
    { name: "Godrick the Grafted", subtitle: "Demigod - Stormveil", category: "Demigod", page: "bosses.html", id: "godrick", icon: "ra-dragon" },
    { name: "Rennala, Queen of the Full Moon", subtitle: "Demigod - Raya Lucaria", category: "Demigod", page: "bosses.html", id: "rennala", icon: "ra-moon-sun" },
    { name: "Starscourge Radahn", subtitle: "Demigod - Caelid", category: "Demigod", page: "bosses.html", id: "radahn", icon: "ra-horseshoe" },
    { name: "Rykard, Lord of Blasphemy", subtitle: "Demigod - Volcano Manor", category: "Demigod", page: "bosses.html", id: "rykard", icon: "ra-snake" },
    { name: "Morgott the Omen King", subtitle: "Demigod - Leyndell", category: "Demigod", page: "bosses.html", id: "morgott", icon: "ra-crown" },
    { name: "Mohg, Lord of Blood", subtitle: "Demigod - Mohgwyn Palace", category: "Demigod", page: "bosses.html", id: "mohg", icon: "ra-bleeding-eye" },
    { name: "Malenia, Blade of Miquella", subtitle: "Demigod - Haligtree", category: "Demigod", page: "bosses.html", id: "malenia", icon: "ra-flower" },
    { name: "Maliketh, the Black Blade", subtitle: "Legend - Crumbling Farum", category: "Legend", page: "bosses.html", id: "maliketh", icon: "ra-wolf-head" },
    { name: "Godfrey, First Elden Lord", subtitle: "Legend - Leyndell", category: "Legend", page: "bosses.html", id: "godfrey", icon: "ra-axe" },
    { name: "Hoarah Loux, Warrior", subtitle: "Legend - Leyndell", category: "Legend", page: "bosses.html", id: "hoarah-loux", icon: "ra-muscle-fat" },
    { name: "Radagon of the Golden Order", subtitle: "Final Boss", category: "Legend", page: "bosses.html", id: "radagon", icon: "ra-sun" },
    { name: "Elden Beast", subtitle: "Final Boss", category: "Legend", page: "bosses.html", id: "elden-beast", icon: "ra-sun" },
    { name: "Dragonlord Placidusax", subtitle: "Legend - Crumbling Farum", category: "Legend", page: "bosses.html", id: "placidusax", icon: "ra-dragon" },
    { name: "Fire Giant", subtitle: "Legend - Mountaintops", category: "Legend", page: "bosses.html", id: "fire-giant", icon: "ra-fire" },
    { name: "Astel, Naturalborn of the Void", subtitle: "Legend - Lake of Rot", category: "Legend", page: "bosses.html", id: "astel", icon: "ra-alien-fire" },
    { name: "Margit, the Fell Omen", subtitle: "Great Enemy - Stormveil", category: "Great Enemy", page: "bosses.html", id: "margit", icon: "ra-hood" },
    { name: "Red Wolf of Radagon", subtitle: "Great Enemy - Raya Lucaria", category: "Great Enemy", page: "bosses.html", id: "red-wolf", icon: "ra-wolf-head" },
    { name: "Godskin Duo", subtitle: "Great Enemy - Crumbling Farum", category: "Great Enemy", page: "bosses.html", id: "godskin-duo", icon: "ra-vest" },
    { name: "Commander Niall", subtitle: "Great Enemy - Castle Sol", category: "Great Enemy", page: "bosses.html", id: "commander-niall", icon: "ra-knight-helmet" },
    { name: "Tree Sentinel", subtitle: "Field Boss - Limgrave", category: "Field Boss", page: "bosses.html", id: "tree-sentinel", icon: "ra-horseshoe" },
    { name: "Flying Dragon Agheel", subtitle: "Dragon - Limgrave", category: "Dragon", page: "bosses.html", id: "agheel", icon: "ra-dragon" },
    { name: "Divine Beast Dancing Lion", subtitle: "DLC - Belurat", category: "DLC", page: "bosses.html", id: "divine-beast", icon: "ra-lion" },
    { name: "Rellana, Twin Moon Knight", subtitle: "DLC - Castle Ensis", category: "DLC", page: "bosses.html", id: "rellana", icon: "ra-moon-sun" },
    { name: "Messmer the Impaler", subtitle: "DLC - Shadow Keep", category: "DLC", page: "bosses.html", id: "messmer", icon: "ra-fire" },
    { name: "Romina, Saint of the Bud", subtitle: "DLC - Church of the Bud", category: "DLC", page: "bosses.html", id: "romina", icon: "ra-butterfly" },
    { name: "Midra, Lord of Frenzied Flame", subtitle: "DLC - Midra's Manse", category: "DLC", page: "bosses.html", id: "midra", icon: "ra-eye-fire" },
    { name: "Bayle the Dread", subtitle: "DLC - Jagged Peak", category: "DLC", page: "bosses.html", id: "bayle", icon: "ra-dragon" },
    { name: "Promised Consort Radahn", subtitle: "DLC - Final Boss", category: "DLC", page: "bosses.html", id: "radahn-consort", icon: "ra-double-team" },
  ],
  consumables: [
    { name: "Flask of Crimson Tears", subtitle: "HP Recovery", category: "Flask", page: "consumables.html", id: "crimson-flask", icon: "ra-health" },
    { name: "Flask of Cerulean Tears", subtitle: "FP Recovery", category: "Flask", page: "consumables.html", id: "cerulean-flask", icon: "ra-crystal-ball" },
    { name: "Rune Arc", subtitle: "Great Rune Activator", category: "Consumable", page: "consumables.html", id: "rune-arc", icon: "ra-fire-ring" },
    { name: "Furlcalling Finger Remedy", subtitle: "Co-op Item", category: "Multiplayer", page: "consumables.html", id: "finger-remedy", icon: "ra-hand" },
    { name: "Fire Grease", subtitle: "Fire Weapon Buff", category: "Grease", page: "consumables.html", id: "fire-grease", icon: "ra-fire" },
    { name: "Magic Grease", subtitle: "Magic Weapon Buff", category: "Grease", page: "consumables.html", id: "magic-grease", icon: "ra-crystals" },
    { name: "Boiled Crab", subtitle: "Defense Buff", category: "Buff", page: "consumables.html", id: "boiled-crab", icon: "ra-crab" },
  ],
  crystalTears: [
    { name: "Cerulean Hidden Tear", subtitle: "Eliminates FP Cost", category: "Cerulean", page: "crystal-tears.html", id: "cerulean-hidden-tear", icon: "ra-crystals" },
    { name: "Opaline Hardtear", subtitle: "Damage Negation", category: "Defense", page: "crystal-tears.html", id: "opaline-hardtear", icon: "ra-shield" },
    { name: "Stonebarb Cracked Tear", subtitle: "Stance Damage Boost", category: "Offense", page: "crystal-tears.html", id: "stonebarb-cracked-tear", icon: "ra-sword" },
  ],
  greatRunes: [
    { name: "Godrick's Great Rune", subtitle: "All Attributes +5", category: "Demigod Rune", page: "great-runes.html", id: "godricks-rune", icon: "ra-fire-ring" },
    { name: "Radahn's Great Rune", subtitle: "Max HP/FP/Stamina", category: "Demigod Rune", page: "great-runes.html", id: "radahns-rune", icon: "ra-fire-ring" },
    { name: "Malenia's Great Rune", subtitle: "HP on Hit", category: "Demigod Rune", page: "great-runes.html", id: "malenias-rune", icon: "ra-flower" },
  ],
  remembrances: [
    { name: "Remembrance of the Grafted", subtitle: "Godrick", category: "Remembrance", page: "remembrances.html", id: "remembrance-grafted", icon: "ra-scroll-unfurled" },
    { name: "Remembrance of the Rot Goddess", subtitle: "Malenia", category: "Remembrance", page: "remembrances.html", id: "remembrance-malenia", icon: "ra-flower" },
    { name: "Elden Remembrance", subtitle: "Elden Beast", category: "Remembrance", page: "remembrances.html", id: "elden-remembrance", icon: "ra-sun" },
  ],
  tools: [
    { name: "Spirit Calling Bell", subtitle: "Summon Spirits", category: "Tool", page: "tools.html", id: "spirit-bell", icon: "ra-fairy" },
    { name: "Crafting Kit", subtitle: "Enable Crafting", category: "Tool", page: "tools.html", id: "crafting-kit", icon: "ra-anvil" },
    { name: "Lantern", subtitle: "Illumination", category: "Tool", page: "tools.html", id: "lantern", icon: "ra-sun" },
  ],
  upgradeMaterials: [
    { name: "Smithing Stone [1]", subtitle: "Weapon Upgrade", category: "Smithing Stone", page: "upgrade-materials.html", id: "smithing-1", icon: "ra-gem" },
    { name: "Ancient Dragon Smithing Stone", subtitle: "Weapon to +25", category: "Somber Stone", page: "upgrade-materials.html", id: "ancient-dragon-stone", icon: "ra-diamond" },
    { name: "Larval Tear", subtitle: "Respec Item", category: "Respec", page: "upgrade-materials.html", id: "larval-tear", icon: "ra-tear" },
  ],
  lore: [
    { name: "The Shattering", subtitle: "War of the Demigods", category: "Events", page: "lore.html", id: "shattering", icon: "ra-sword" },
    { name: "Queen Marika", subtitle: "The Eternal", category: "Characters", page: "lore.html", id: "marika", icon: "ra-crown" },
    { name: "The Erdtree", subtitle: "Golden Order", category: "Locations", page: "lore.html", id: "erdtree", icon: "ra-brandy-bottle" },
  ],
  ammunition: [
    { name: "Arrow", subtitle: "Standard Arrow", category: "Physical", page: "ammunition.html", id: "arrow", icon: "ra-arrow-flights" },
    { name: "Fire Arrow", subtitle: "Fire Damage Arrow", category: "Fire", page: "ammunition.html", id: "fire-arrow", icon: "ra-arrow-flights" },
    { name: "Magic Arrow", subtitle: "Magic Damage Arrow", category: "Magic", page: "ammunition.html", id: "magic-arrow", icon: "ra-arrow-flights" },
    { name: "Lightning Arrow", subtitle: "Lightning Damage Arrow", category: "Lightning", page: "ammunition.html", id: "lightning-arrow", icon: "ra-arrow-flights" },
    { name: "Holy Arrow", subtitle: "Holy Damage Arrow", category: "Holy", page: "ammunition.html", id: "holy-arrow", icon: "ra-arrow-flights" },
    { name: "Poison Arrow", subtitle: "Poison Buildup Arrow", category: "Status", page: "ammunition.html", id: "poison-arrow", icon: "ra-arrow-flights" },
    { name: "Bloodbone Arrow", subtitle: "Blood Loss Arrow", category: "Status", page: "ammunition.html", id: "bloodbone-arrow", icon: "ra-arrow-flights" },
    { name: "Bolt", subtitle: "Standard Bolt", category: "Physical", page: "ammunition.html", id: "bolt", icon: "ra-arrow-flights" },
    { name: "Lightning Bolt", subtitle: "Lightning Damage Bolt", category: "Lightning", page: "ammunition.html", id: "lightning-bolt", icon: "ra-arrow-flights" },
    { name: "Greatarrow", subtitle: "Heavy Arrow", category: "Greatbow", page: "ammunition.html", id: "greatarrow", icon: "ra-arrow-flights" },
    { name: "Radahn's Spear", subtitle: "Legendary Greatarrow", category: "Greatbow", page: "ammunition.html", id: "radahns-spear", icon: "ra-arrow-flights" },
  ],
  keyItems: [
    { name: "Spectral Steed Whistle", subtitle: "Summons Torrent", category: "Key Item", page: "key-items.html", id: "spectral-steed-whistle", icon: "ra-horseshoe" },
    { name: "Flask of Wondrous Physick", subtitle: "Customizable Flask", category: "Key Item", page: "key-items.html", id: "flask-wondrous-physick", icon: "ra-health" },
    { name: "Haligtree Secret Medallion", subtitle: "Access Haligtree", category: "Medallion", page: "key-items.html", id: "haligtree-medallion", icon: "ra-round-shield" },
    { name: "Dectus Medallion", subtitle: "Grand Lift of Dectus", category: "Medallion", page: "key-items.html", id: "dectus-medallion", icon: "ra-round-shield" },
    { name: "Academy Glintstone Key", subtitle: "Academy Access", category: "Key", page: "key-items.html", id: "academy-key", icon: "ra-key-basic" },
    { name: "Stonesword Key", subtitle: "Imp Seal Unlock", category: "Key", page: "key-items.html", id: "stonesword-key", icon: "ra-key-basic" },
    { name: "Cursemark of Death", subtitle: "Ranni's Quest", category: "Quest Item", page: "key-items.html", id: "cursemark-death", icon: "ra-skull" },
    { name: "Dark Moon Ring", subtitle: "Ranni's Ring", category: "Quest Item", page: "key-items.html", id: "dark-moon-ring", icon: "ra-moon-sun" },
  ],
};

function getAllSearchableItems() {
  const allItems = [];
  for (const [type, items] of Object.entries(wikiSearchDatabase)) {
    items.forEach(item => {
      allItems.push({
        ...item, type,
        searchText: `${item.name} ${item.subtitle || ''} ${item.category || ''}`.toLowerCase()
      });
    });
  }
  return allItems;
}

function searchWiki(query) {
  if (!query || query.length < 2) return [];
  const searchTerm = query.toLowerCase().trim();
  const allItems = getAllSearchableItems();
  
  return allItems
    .map(item => {
      let score = 0;
      const name = item.name.toLowerCase();
      const subtitle = (item.subtitle || '').toLowerCase();
      
      if (name === searchTerm) score += 100;
      else if (name.startsWith(searchTerm)) score += 80;
      else if (name.includes(searchTerm)) score += 40;
      else if (subtitle.includes(searchTerm)) score += 30;
      else if (item.searchText.includes(searchTerm)) score += 10;
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15);
}

function highlightMatch(text, query) {
  if (!query || !text) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function getTypeLabel(type) {
  const labels = {
    characters: 'Character', bosses: 'Boss', consumables: 'Consumable',
    crystalTears: 'Crystal Tear', greatRunes: 'Great Rune', remembrances: 'Remembrance',
    tools: 'Tool', upgradeMaterials: 'Upgrade Material', lore: 'Lore',
    ammunition: 'Ammunition', keyItems: 'Key Item'
  };
  return labels[type] || type;
}

function navigateToResult(item) {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  sessionStorage.setItem('searchHighlight', JSON.stringify({ name: item.name, id: item.id, type: item.type, autoOpen: true }));
  
  if (currentPage === item.page) {
    highlightAndOpenModal(item);
  } else {
    window.location.href = `${item.page}?item=${encodeURIComponent(item.name)}`;
  }
}

function highlightAndOpenModal(item) {
  let targetElement = document.querySelector(`[data-name="${item.name}"]`);
  
  if (!targetElement) {
    const headings = document.querySelectorAll('h3, h4, .item-title h4, .boss-title h4, .character-card h3, .member-content h3');
    for (const heading of headings) {
      if (heading.textContent.trim().toLowerCase().includes(item.name.toLowerCase())) {
        targetElement = heading.closest('.item-card, .boss-card, .character-card, .member-card, article') || heading;
        break;
      }
    }
  }
  
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    targetElement.classList.add('search-highlighted');
    setTimeout(() => targetElement.click(), 500);
    setTimeout(() => targetElement.classList.remove('search-highlighted'), 3000);
  } else if (item.type === 'characters' && typeof renderCharacters === 'function') {
    renderCharacters('all', '');
    setTimeout(() => {
      const cards = document.querySelectorAll('.character-card');
      for (const card of cards) {
        const title = card.querySelector('h3');
        if (title && title.textContent.trim().toLowerCase().includes(item.name.toLowerCase())) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('search-highlighted');
          setTimeout(() => card.click(), 500);
          setTimeout(() => card.classList.remove('search-highlighted'), 3000);
          break;
        }
      }
    }, 400);
  }
}

function createSearchDropdown() {
  const dropdown = document.createElement('div');
  dropdown.className = 'search-results';
  dropdown.id = 'wikiSearchResults';
  dropdown.innerHTML = `
    <div class="search-results-header"><i class="ra ra-compass"></i><span>Wiki Search Results</span></div>
    <div class="search-results-list"></div>
    <div class="search-results-footer"><span><kbd>↑↓</kbd> Navigate</span><span><kbd>Enter</kbd> Select</span><span><kbd>Esc</kbd> Close</span></div>
  `;
  return dropdown;
}

function renderSearchResults(results, query, container) {
  const listContainer = container.querySelector('.search-results-list');
  
  if (results.length === 0) {
    listContainer.innerHTML = `<div class="search-result-item no-results"><div class="search-no-results-icon"><i class="ra ra-telescope"></i></div><div class="search-no-results-text">No results for "<strong>${query}</strong>"</div></div>`;
    return;
  }
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  listContainer.innerHTML = results.map((item, index) => `
    <div class="search-result-item" data-index="${index}">
      <div class="search-result-icon"><i class="ra ${item.icon}"></i></div>
      <div class="search-result-info">
        <div class="search-result-name">${highlightMatch(item.name, query)}</div>
        <div class="search-result-category">
          <span class="search-result-category-badge">${getTypeLabel(item.type)}</span>
          ${item.subtitle ? `<span>${highlightMatch(item.subtitle, query)}</span>` : ''}
          ${item.page !== currentPage ? `<span class="search-result-redirect"><i class="ra ra-arrow-right"></i> ${item.page.replace('.html', '')}</span>` : `<span class="search-result-here"><i class="ra ra-compass"></i> here</span>`}
        </div>
      </div>
    </div>
  `).join('');
}

function initializeSearch() {
  const searchInput = document.querySelector('.search-box input, #wiki-search-input, #search-input');
  if (!searchInput) return;
  
  const searchBox = searchInput.closest('.search-box') || searchInput.parentElement;
  let dropdown = document.getElementById('wikiSearchResults');
  if (!dropdown) { dropdown = createSearchDropdown(); searchBox.appendChild(dropdown); }
  
  let selectedIndex = -1, currentResults = [];
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) { dropdown.style.display = 'none'; currentResults = []; return; }
    currentResults = searchWiki(query);
    renderSearchResults(currentResults, query, dropdown);
    dropdown.style.display = 'block';
    selectedIndex = -1;
  });
  
  searchInput.addEventListener('keydown', (e) => {
    if (dropdown.style.display === 'none') return;
    const items = dropdown.querySelectorAll('.search-result-item:not(.no-results)');
    
    if (e.key === 'ArrowDown') { e.preventDefault(); selectedIndex = Math.min(selectedIndex + 1, items.length - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selectedIndex = Math.max(selectedIndex - 1, -1); }
    else if (e.key === 'Enter' && selectedIndex >= 0) { e.preventDefault(); navigateToResult(currentResults[selectedIndex]); dropdown.style.display = 'none'; }
    else if (e.key === 'Escape') { dropdown.style.display = 'none'; }
    
    items.forEach((item, i) => item.classList.toggle('active', i === selectedIndex));
    if (selectedIndex >= 0 && items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
  });
  
  dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item:not(.no-results)');
    if (item) { navigateToResult(currentResults[parseInt(item.dataset.index)]); dropdown.style.display = 'none'; }
  });
  
  dropdown.addEventListener('mouseover', (e) => {
    const item = e.target.closest('.search-result-item:not(.no-results)');
    if (item) {
      selectedIndex = parseInt(item.dataset.index) || 0;
      dropdown.querySelectorAll('.search-result-item').forEach((el, i) => el.classList.toggle('active', i === selectedIndex));
    }
  });
  
  document.addEventListener('click', (e) => { if (!searchBox.contains(e.target)) dropdown.style.display = 'none'; });
  
  checkForSearchRedirect();
}

function checkForSearchRedirect() {
  const params = new URLSearchParams(window.location.search);
  const itemName = params.get('item');
  
  if (itemName) {
    let item = null;
    const stored = sessionStorage.getItem('searchHighlight');
    if (stored) { try { item = JSON.parse(stored); sessionStorage.removeItem('searchHighlight'); } catch(e) {} }
    if (!item) item = getAllSearchableItems().find(i => i.name.toLowerCase() === itemName.toLowerCase());
    
    if (item) setTimeout(() => highlightAndOpenModal(item), 600);
    window.history.replaceState({}, '', window.location.pathname);
  }
}

document.addEventListener('DOMContentLoaded', () => setTimeout(initializeSearch, 100));
if (typeof window !== 'undefined') { window.initializeSearch = initializeSearch; window.searchWiki = searchWiki; }
