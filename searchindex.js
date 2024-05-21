Search.setIndex({"docnames": ["Prerequisite", "Section_2", "Section_3", "Section_4", "Section_5", "index"], "filenames": ["Prerequisite.ipynb", "Section_2.ipynb", "Section_3.ipynb", "Section_4.ipynb", "Section_5.ipynb", "index.md"], "titles": ["1: Importing Packages", "2. NEON Utilities Tools", "3: Soil Water Content", "4: Soil Temperature", "5: Soil Carbon Dioxide (CO2)", "Exploring NEON Data Tutorial"], "terms": {"To": [0, 1], "begin": [0, 1], "we": [0, 1, 2, 3, 4], "need": [0, 1, 2], "ensur": [0, 1, 2, 3, 4, 5], "i": [0, 1, 2, 3, 4, 5], "If": [0, 1, 2], "you": [0, 1, 2, 3, 4, 5], "haven": 0, "t": 0, "previous": 0, "can": [0, 1, 2, 4, 5], "easili": 0, "do": [0, 1], "so": 0, "follow": 0, "step": [0, 1, 5], "from": [0, 1, 2, 3, 4, 5], "rpy2": [0, 1], "robject": [0, 1], "importr": [0, 1], "util": 0, "install_packag": 0, "repo": 0, "http": [0, 2], "cran": 0, "rstudio": 0, "com": 0, "note": [0, 1], "thi": [0, 1, 2, 3, 4, 5], "requir": [0, 1], "onli": [0, 2], "onc": [0, 1], "have": [0, 1, 5], "alreadi": [0, 1], "skip": [0, 1], "now": 0, "let": 0, "": [0, 1, 2], "python": [0, 1], "tutori": [0, 1, 2, 3, 4], "run": 0, "code": [0, 1, 2], "librari": [0, 1], "rinterface_lib": [0, 1], "callback": [0, 1], "logger": [0, 1], "rpy2_logg": [0, 1], "log": [0, 1], "o": [0, 1, 2, 3, 4], "panda": [0, 1, 2, 3, 4], "pd": [0, 1, 2, 3, 4], "numpi": [0, 1, 3], "np": [0, 1, 2, 3], "matplotlib": [0, 1, 2, 3, 4], "pyplot": [0, 1, 2, 3, 4], "plt": [0, 1, 2, 3, 4], "base": [0, 1, 2, 3, 4], "set": [0, 1, 2, 3, 4], "level": [0, 1, 5], "suppress": [0, 1], "messag": [0, 1], "setlevel": [0, 1], "error": [0, 1], "stat": [0, 1], "via": [0, 1], "environ": [0, 1, 4], "r_home": [0, 1], "framework": [0, 1], "resourc": [0, 1, 5], "By": [0, 2, 4], "us": [0, 1, 2, 3, 4], "core": [0, 1], "gener": [0, 1, 2], "purpos": [0, 2], "oper": [0, 1], "within": [0, 1, 2, 4], "kei": [0, 4], "point": 0, "The": [0, 1, 2, 3, 4], "directli": [0, 1], "act": 0, "bridg": 0, "allow": [0, 1, 2, 3, 4], "interact": [0, 5], "object": [0, 1, 3, 4], "rememb": [0, 1], "adjust": [0, 1], "path": [0, 1, 2], "your": [0, 4, 5], "differ": [0, 3, 4], "provid": [0, 1, 2, 3, 4, 5], "exampl": [0, 1], "next": 0, "ll": [0, 1, 2], "proce": [0, 1], "through": [0, 3, 4, 5], "access": [0, 4, 5], "process": [0, 1, 2, 3, 4, 5], "neon": [0, 2, 3, 4], "data": [0, 3, 4], "well": 0, "prepar": 0, "leverag": [0, 4], "analyz": [0, 2, 4], "jupyt": [0, 4], "notebook": 0, "system": 0, "ar": [0, 1, 2, 4], "correctli": 0, "configur": 0, "re": [0, 2], "home": 0, "directori": [0, 1], "shown": 0, "last": 0, "line": [0, 2], "abov": 0, "locat": [0, 1], "replac": [0, 1], "accordingli": 0, "section": [0, 1, 2, 3, 4], "structur": 0, "approach": [0, 2, 5], "execut": [0, 1], "sequenti": [0, 1], "seamless": [0, 5], "experi": [0, 5], "feel": 0, "free": 0, "instruct": [0, 2], "add": [0, 2], "ani": 0, "addit": 0, "inform": [0, 3, 5], "better": [0, 2], "suit": 0, "context": 0, "In": 1, "explor": [1, 4], "how": [1, 2, 5], "effici": 1, "work": [1, 2], "api": 1, "power": [1, 4], "neonutil": [1, 2], "u": [1, 2], "seamlessli": 1, "further": 1, "analysi": [1, 3, 4], "offer": [1, 3, 4], "two": [1, 3, 4], "current": [1, 2, 3], "focu": 1, "method": 1, "retriev": [1, 2, 4, 5], "detail": 1, "about": [1, 3], "want": 1, "local": 1, "altern": 1, "here": [1, 3], "function": [1, 2, 3, 4], "product": [1, 2, 4], "essenti": [1, 4], "id": 1, "dpid": 1, "date": [1, 2, 3, 4], "rang": [1, 3], "site": [1, 2, 3, 4, 5], "packag": [1, 2], "type": [1, 3, 4], "file": [1, 3, 4], "save": [1, 2], "whether": [1, 3], "check": [1, 2, 3], "size": [1, 2], "breakdown": 1, "its": 1, "argument": 1, "identifi": 1, "found": 1, "page": 1, "startdat": 1, "start": [1, 2, 4], "yyyi": 1, "mm": 1, "format": [1, 2, 3], "e": 1, "g": 1, "2020": 1, "01": 1, "enddat": 1, "end": 1, "2021": 1, "12": [1, 2, 3], "A": 1, "charact": 1, "vector": 1, "contain": [1, 2], "letter": 1, "tall": [1, 2, 3], "all": [1, 2, 4, 5], "savepath": 1, "where": 1, "basic": 1, "default": 1, "expand": [1, 3, 4], "depend": 1, "check_siz": 1, "true": [1, 2, 3, 4], "verifi": [1, 2], "befor": 1, "proceed": 1, "fals": 1, "import": [1, 2, 3, 4], "r": 1, "load": 1, "correct": [1, 2], "intend": 1, "paramet": 1, "desir": 1, "demonstr": [1, 2], "three": [1, 4], "moistur": [1, 5], "content": 1, "dp1": 1, "00094": 1, "001": 1, "2017": [1, 2, 3, 4], "2023": 1, "c": [1, 2, 3], "volum": [1, 2, 3, 4], "thoma": [1, 2, 3, 4], "timeindex": 1, "find": 1, "avail": 1, "100": [1, 2, 3], "provision": 1, "were": 1, "exclud": 1, "list": 1, "input": 1, "includ": [1, 2], "30": [1, 2, 3, 4], "continu": 1, "total": [1, 4], "approxim": [1, 3, 4], "494": 1, "151871": 1, "mb": 1, "y": [1, 2, 3, 4], "n": [1, 2, 3], "2577": 1, "successfulli": [1, 2], "filestostack00094": [1, 2], "sexp": 1, "nulltyp": 1, "0x14bcc10d0": 1, "0": [1, 2, 3, 4], "temperatur": 1, "00041": 1, "450": 1, "134447": 1, "3207": 1, "filestostack00041": [1, 3], "carbon": 1, "dioxid": 1, "co2": 1, "concentr": [1, 4], "00095": 1, "145": 1, "83331": 1, "1079": 1, "filestostack00095": [1, 4], "more": 1, "usabl": 1, "specifi": [1, 2], "expect": 1, "output": 1, "stack": 1, "filepath": 1, "water": [1, 3], "calcul": [1, 2, 3], "elaps": 1, "00": 1, "across": [1, 2, 5], "singl": 1, "tabl": 1, "st_30_minut": [1, 3], "10": 1, "13": [1, 2, 3, 4], "5": [1, 3], "11": 1, "6": [1, 3], "7": [1, 2], "8": [1, 2], "9": [1, 2, 3, 4], "14": [1, 4], "15": [1, 2, 3], "16": [1, 3], "17": 1, "18": 1, "19": 1, "20": 1, "21": 1, "22": 1, "23": 1, "09": 1, "24": [1, 3], "26": [1, 3], "27": 1, "28": 1, "29": 1, "08": 1, "31": 1, "32": 1, "33": 1, "34": 1, "35": 1, "36": 1, "37": 1, "07": [1, 2, 3, 4], "38": 1, "39": 1, "40": 1, "41": 1, "42": 1, "43": 1, "06": [1, 3, 4], "44": 1, "45": [1, 4], "46": 1, "47": 1, "48": 1, "49": 1, "50": [1, 4], "51": 1, "05": [1, 2], "52": 1, "53": 1, "54": 1, "55": [1, 2], "56": [1, 3], "57": 1, "58": 1, "59": 1, "60": 1, "04": [1, 4], "61": 1, "62": 1, "63": 1, "64": 1, "65": 1, "66": 1, "67": 1, "68": 1, "03": 1, "69": 1, "70": 1, "71": 1, "72": 1, "73": 1, "74": 1, "76": 1, "77": 1, "78": 1, "02": [1, 3], "79": 1, "80": 1, "81": 1, "82": 1, "83": 1, "84": 1, "85": [1, 2], "86": [1, 3], "87": 1, "88": 1, "89": 1, "90": 1, "91": 1, "92": 1, "93": 1, "94": 1, "95": 1, "96": [1, 3], "97": 1, "98": 1, "99": 1, "merg": 1, "most": 1, "recent": 1, "public": 1, "sensor": [1, 3, 4], "posit": [1, 3, 4], "each": [1, 2, 4], "stackedfil": [1, 2, 3, 4], "copi": [1, 2, 3, 4], "variabl": [1, 5], "definit": 1, "finish": 1, "metadata": 1, "took": 1, "64224": 1, "sec": 1, "unzip": [1, 3, 4], "monthli": 1, "folder": 1, "been": 1, "remov": [1, 2], "sco2c_30_minut": [1, 4], "80769": 1, "sws_30_minut": [1, 2], "25": [1, 2, 3], "75": 1, "45058": 1, "reflect": [1, 2], "similarli": 1, "name": [1, 2, 3], "actual": 1, "dure": 1, "effect": [1, 2, 4, 5], "volumetr": 2, "swc": 2, "record": 2, "variou": [2, 5], "below": [2, 3, 4], "surfac": [2, 3, 4], "cm": [2, 3, 4], "down": 2, "200": [2, 3], "non": 2, "permafrost": 2, "300": [2, 3], "alaskan": [2, 3], "typic": [2, 4], "come": 2, "five": [2, 4], "instrument": [2, 4], "plot": [2, 3, 4], "per": [2, 4], "minut": [2, 3, 4], "averag": [2, 3, 4], "due": 2, "ongo": 2, "separ": 2, "swc_depthsv2": 2, "csv": [2, 3, 4], "snippet": 2, "request": 2, "automat": 2, "url": 2, "neonscienc": 2, "org": 2, "document": 2, "10179": 2, "11206": 2, "77eee1a6": 2, "4de5": 2, "6746": 2, "4471": 2, "ab3a61c7685b": 2, "respons": 2, "get": [2, 3, 4], "status_cod": 2, "sensor_p": 2, "read_csv": [2, 3, 4], "print": [2, 3], "els": [2, 3], "fail": 2, "listdir": [2, 3, 4], "datafram": [2, 3, 4], "convert": [2, 3, 4], "startdatetim": [2, 3, 4], "datetim": [2, 3], "index": [2, 3, 4], "vwc": 2, "focus": [2, 5], "interv": 2, "soil_vwc_data": 2, "to_datetim": [2, 3, 4], "set_index": [2, 3, 4], "inplac": [2, 3, 4], "organ": 2, "clean": 2, "horizontalposit": [2, 3, 4], "siteid": [2, 3, 4], "select": [2, 3, 4], "relev": 2, "columns_of_interest": [2, 3, 4], "filter": [2, 3, 4], "row": [2, 3, 4], "poor": 2, "qualiti": [2, 5], "vsicfinalqf": 2, "group": [2, 3, 4], "vertic": [2, 3, 4], "mean": [2, 3, 4], "vswcmean": [2, 3], "vsicmean": 2, "minimum": 2, "maximum": 2, "valu": [2, 3, 4], "vswcminimum": 2, "vswcmaximum": 2, "vsicminimum": 2, "vsicmaximum": 2, "domainid": [2, 3, 4], "verticalposit": [2, 3, 4], "vswcfinalqf": 2, "sw_df": 2, "activ": [2, 3, 4], "interest": 2, "specif": 2, "df": 2, "daily_df": 2, "groupbi": [2, 3, 4], "agg": [2, 3, 4], "first": [2, 3, 4], "sum": 2, "reset_index": [2, 3, 4], "renam": [2, 3, 4], "level_0": [2, 3, 4], "soildepth": [2, 3, 4], "startswith": [2, 3, 4], "tal": 2, "dictionari": [2, 3, 4], "sensor_depth_map": 2, "map": [2, 3, 4], "defin": 2, "populate_soil_depth": 2, "assign": 2, "new": [2, 3, 4], "plot_1": 2, "astyp": [2, 3, 4], "str": [2, 3, 4], "store": [2, 3, 4], "result": [2, 3, 4], "horizont": [2, 3, 4], "ver": [2, 3, 4], "sensordepth": 2, "_": [2, 3, 4], "iterrow": [2, 3, 4], "popul": [2, 3, 4], "def": [2, 3, 4], "vertical_po": [2, 3, 4], "sensor_depth": [2, 4], "return": [2, 3, 4], "appli": [2, 3, 4, 5], "axi": [2, 3, 4], "head": [2, 3, 4], "501": [2, 3, 4], "d08": [2, 3], "4929": 2, "135171": 2, "135446": 2, "61228": 2, "195": 2, "1274": 2, "544708": 2, "1276": 2, "525271": 2, "8887": 2, "023358": 2, "023468": 2, "29613": 2, "993": 2, "778": 2, "904237": 2, "779": 2, "656211": 2, "1213": 2, "026681": 2, "026714": 2, "36643": 2, "037": 2, "872": 2, "009333": 2, "955667": 2, "7993": 2, "019858": 2, "020130": 2, "26369": 2, "922": 2, "659": 2, "041225": 2, "470000": 2, "502": [2, 3, 4], "1697": 2, "188600": 2, "188755": 2, "49327": 2, "516": 2, "1297": 2, "812316": 2, "1298": 2, "323632": 2, "aggreg": [2, 3, 4], "take": [2, 3, 4], "over": [2, 3, 4], "data_plot": [2, 3, 4], "reset": [2, 3, 4], "make": [2, 3, 4], "regular": [2, 3, 4], "325550": 2, "051267": 2, "051440": 2, "38463": 2, "78675": 2, "896": 2, "124876": 2, "897": 2, "151787": 2, "020225": 2, "055523": 2, "055615": 2, "26306": 2, "99000": 2, "837": 2, "766902": 2, "838": 2, "285919": 2, "503": [2, 3, 4], "445725": 2, "060395": 2, "060615": 2, "39223": 2, "93150": 2, "1082": 2, "567012": 2, "1083": 2, "845942": 2, "504": [2, 3], "716000": 2, "046839": 2, "046924": 2, "38678": 2, "52150": 2, "1074": 2, "134569": 2, "838723": 2, "505": [2, 3], "158925": 2, "064612": 2, "065087": 2, "42954": 2, "96325": 2, "1278": 2, "270204": 2, "1283": 2, "089536": 2, "grouped_data": 2, "df_1": [2, 3, 4], "to_csv": [2, 3, 4], "tall_daily_soilmoistur": 2, "iter": [2, 3], "uniqu": [2, 3], "combin": [2, 4], "correspond": 2, "sinc": [2, 4], "comput": 2, "For": 2, "multipl": [2, 4], "indic": [2, 4], "given": 2, "plot_var": [2, 3], "entir": 2, "area": 2, "manner": 2, "represent": 2, "rather": 2, "than": 2, "individu": 2, "depth_valu": [2, 3], "x": [2, 3], "meshgrid": [2, 3], "initi": [2, 3], "swc_var": 2, "zero": [2, 3], "len": [2, 3], "enumer": [2, 3], "filtered_data": [2, 3], "j": [2, 3], "exist": [2, 3], "vswc_valu": 2, "loc": [2, 3, 4], "vswc_mean": 2, "isinst": [2, 3], "seri": [2, 3], "shape": [2, 3], "2113": 2, "fill": 2, "contour": 2, "repres": [2, 4], "color": [2, 3], "intens": 2, "higher": 2, "custom": 2, "label": [2, 3, 4], "titl": [2, 3, 4], "colorbar": [2, 3], "rotat": [2, 3, 4], "readabl": 2, "truncate_colormap": [2, 3], "cmap": [2, 3], "minval": [2, 3], "maxval": [2, 3], "new_cmap": [2, 3], "linearsegmentedcolormap": [2, 3], "from_list": [2, 3], "trunc": [2, 3], "2f": [2, 3], "b": [2, 3], "linspac": [2, 3], "get_cmap": [2, 3], "gist_earth_r": 2, "rcparam": 2, "font": 2, "weight": 2, "bold": [2, 3], "ax": [2, 3], "labelweight": 2, "rc": 2, "fig": [2, 3], "figur": [2, 3, 4, 5], "num": [2, 3], "none": [2, 3], "figsiz": [2, 3, 4], "facecolor": [2, 3], "w": [2, 3], "edgecolor": [2, 3], "k": [2, 3], "gca": [2, 3], "contourf": [2, 3], "extend": [2, 3], "both": [2, 3], "xtick": [2, 3, 4], "ylabel": [2, 3, 4], "m": [2, 3], "xlabel": [2, 3, 4], "period": [2, 3], "time": [2, 3], "fontweight": [2, 3], "cbar": [2, 3], "shrink": [2, 3], "y_label": [2, 3], "m\u00b3": 2, "set_ylabel": [2, 3], "show": [2, 3, 4], "adapt": 2, "other": [2, 4, 5], "fundament": 3, "metric": [3, 4], "ecolog": [3, 4, 5], "studi": [3, 4], "affect": 3, "vital": 3, "biogeochem": 3, "cycl": [3, 4], "decomposit": 3, "rate": [3, 4], "root": [3, 4], "biota": 3, "addition": 3, "plai": [3, 5], "signific": [3, 4], "role": [3, 5], "hydrolog": 3, "determin": 3, "state": 3, "liquid": 3, "solid": 3, "dataset": [3, 4], "variat": 3, "depth": [3, 4], "2": [3, 4], "up": 3, "1": [3, 4], "measur": [3, 4], "research": [3, 5], "observ": 3, "tempor": 3, "trend": 3, "pattern": 3, "high": 3, "granular": 3, "throughout": [3, 4], "guid": [3, 4, 5], "download": [3, 4, 5], "earlier": 3, "preprocess": [3, 4], "visual": [3, 4, 5], "techniqu": [3, 4], "empow": [3, 5], "deriv": [3, 4], "meaning": [3, 5], "insight": [3, 4, 5], "read": [3, 4], "variables_00041": 3, "readme_00041": 3, "txt": [3, 4], "citation_00041_releas": 3, "2024": [3, 4], "sensor_positions_00041": 3, "issuelog_00041": 3, "column": [3, 4], "enddatetim": [3, 4], "soiltempmean": 3, "soiltempminimum": 3, "soiltempmaximum": 3, "soiltempvari": 3, "soiltempnumpt": 3, "soiltempexpuncert": 3, "soiltempstdermean": 3, "finalqf": [3, 4], "publicationd": [3, 4], "releas": [3, 4], "dtype": [3, 4], "st_df": 3, "df_t": 3, "mean_col": [3, 4], "first_col": [3, 4], "daily_t": 3, "sensorp": [3, 4], "subset": [3, 4], "coi": [3, 4], "hor": [3, 4], "xoffset": [3, 4], "yoffset": [3, 4], "zoffset": [3, 4], "sensor_l": [3, 4], "string": [3, 4], "split": [3, 4], "creat": [3, 4], "back": [3, 4], "numer": [3, 4], "to_numer": [3, 4], "drop": [3, 4], "origin": [3, 4], "arrai": 3, "plot_t": 3, "sd": 3, "psensor_depth": 3, "sd_valu": 3, "lambda": [3, 4], "431933": 3, "262250": 3, "601667": 3, "130200": 3, "009479": 3, "249046": 3, "530112": 3, "467883": 3, "592025": 3, "053558": 3, "020608": 3, "086546": 3, "051950": 3, "046342": 3, "057625": 3, "2d": 3, "st": 3, "st_mean": 3, "2153": 3, "ylorrd": 3, "profil": [3, 4], "0c": 3, "like": 3, "st_6cm": 3, "daily_st": 3, "resampl": 3, "d": 3, "to_fram": 3, "3": [3, 4], "brown": 3, "ad": [3, 4], "legend": [3, 4], "upper": 3, "right": 3, "displai": [3, 4], "tall_daily_soiltemp": 3, "crucial": [4, 5], "aspect": 4, "terrestri": 4, "ecosystem": [4, 5], "air": 4, "commenc": 4, "These": 4, "present": 4, "understand": 4, "estim": 4, "efflux": 4, "particularli": 4, "when": 4, "exchang": 4, "between": [4, 5], "atmospher": 4, "critic": 4, "compon": 4, "moreov": 4, "major": 4, "microbi": 4, "faunal": 4, "respir": 4, "serv": 4, "valuabl": [4, 5], "biolog": 4, "strateg": 4, "meter": 4, "character": 4, "gradient": 4, "taken": 4, "gain": 4, "necessari": [4, 5], "skill": [4, 5], "interpret": 4, "dynam": [4, 5], "implic": 4, "citation_00095_releas": 4, "readme_00095": 4, "variables_00095": 4, "sensor_positions_00095": 4, "issuelog_00095": 4, "veri": 4, "larg": 4, "sure": 4, "handl": 4, "soilco2concentrationmean": 4, "soilco2concentrationminimum": 4, "soilco2concentrationmaximum": 4, "soilco2concentrationvari": 4, "soilco2concentrationnumpt": 4, "soilco2concentrationexpuncert": 4, "soilco2concentrationstdermean": 4, "sc02_df": 4, "df_c02": 4, "daily_c02": 4, "s_plot_1": 4, "positionenddatetim": 4, "dropna": 4, "plot_c02": 4, "s_depth": 4, "p_sensor_depth": 4, "sensor_depth_valu": 4, "z0ffset": 4, "depth_3cm": 4, "depth_4cm": 4, "depth_5cm": 4, "sco2": 4, "3cm": 4, "4cm": 4, "5cm": 4, "limit": 4, "ylim": 4, "10500": 4, "ppm": 4, "lower": 4, "center": 4, "bbox_to_anchor": 4, "shadow": 4, "ncol": 4, "tall_daily_soilco2concentr": 4, "1930": 4, "344792": 4, "3123": 4, "135667": 4, "2617": 4, "242875": 4, "1982": 4, "122083": 4, "4": 4, "3150": 4, "291167": 4, "welcom": 5, "soil": 5, "nation": 5, "observatori": 5, "network": 5, "walk": 5, "export": 5, "applic": 5, "our": 5, "complex": 5, "relationship": 5, "climat": 5, "veget": 5, "hydrologi": 5, "teach": 5, "effortlessli": 5, "divers": 5, "develop": 5, "graphic": 5, "conduct": 5, "analys": 5, "draw": 5, "conclus": 5, "cater": 5, "expertis": 5, "season": 5, "curiou": 5, "student": 5, "enthusiast": 5, "citizen": 5, "scientist": 5, "learn": 5, "discoveri": 5, "eas": 5, "upon": 5, "complet": 5, "navig": 5, "extract": 5, "advanc": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"1": [0, 1, 2], "import": 0, "packag": 0, "instal": 0, "neonutil": 0, "r": 0, "2": [0, 1, 2], "load": [0, 2], "necessari": [0, 2], "neon": [1, 5], "util": 1, "tool": 1, "choos": 1, "your": 1, "download": [1, 2], "approach": 1, "data": [1, 2, 5], "zipsbyproduct": 1, "3": [1, 2], "specif": 1, "soil": [1, 2, 3, 4], "4": [1, 2, 3], "organ": 1, "stackbyt": 1, "water": 2, "content": 2, "understand": 2, "moistur": 2, "sensor": 2, "posit": 2, "file": 2, "ad": 2, "depth": 2, "column": 2, "5": [2, 4], "creat": 2, "mesh": 2, "2d": 2, "arrai": 2, "6": 2, "visual": 2, "profil": 2, "temperatur": 3, "carbon": 4, "dioxid": 4, "co2": 4, "explor": 5, "tutori": 5}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"1: Importing Packages": [[0, "importing-packages"]], "1.1 Installing neonUtilities R Package": [[0, "installing-neonutilities-r-package"]], "1.2 Loading Necessary Packages": [[0, "loading-necessary-packages"]], "2. NEON Utilities Tools": [[1, "neon-utilities-tools"]], "2.1 Choosing Your Download Approach:": [[1, "choosing-your-download-approach"]], "2.2 Downloading Data with zipsByProduct():": [[1, "downloading-data-with-zipsbyproduct"]], "2.3 Downloading Specific Soil Data:": [[1, "downloading-specific-soil-data"]], "2.4 Organizing Downloaded Data with stackByTable():": [[1, "organizing-downloaded-data-with-stackbytable"]], "3: Soil Water Content": [[2, "soil-water-content"]], "3.1 Understanding Soil Moisture Data:": [[2, "understanding-soil-moisture-data"]], "3.2 Downloading Sensor Positions (if necessary):": [[2, "downloading-sensor-positions-if-necessary"]], "3.3 Downloaded Files and Loading Data:": [[2, "downloaded-files-and-loading-data"]], "3.4 Adding Soil Depth Column": [[2, "adding-soil-depth-column"]], "3.5 Creating a Mesh and 2D Array": [[2, "creating-a-mesh-and-2d-array"]], "3.6 Visualizing Soil Moisture Profile": [[2, "visualizing-soil-moisture-profile"]], "4: Soil Temperature": [[3, "soil-temperature"]], "5: Soil Carbon Dioxide (CO2)": [[4, "soil-carbon-dioxide-co2"]], "Exploring NEON Data Tutorial": [[5, "exploring-neon-data-tutorial"]]}, "indexentries": {}})