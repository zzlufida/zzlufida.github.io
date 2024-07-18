window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7741","name":"QMREJECTVOUCHERS","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QMREJECTVOUCHERS"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-109808","object_id":"column-109808","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109809","object_id":"column-109809","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109810","object_id":"column-109810","name":"CREASONCODE","name_without_path":"CREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7870","name":"Reason","name_show_schema":"dbo.Reason"}]},{"id":"column-109811","object_id":"column-109811","name":"FQUANTITY","name_without_path":"FQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109812","object_id":"column-109812","name":"FNUM","name_without_path":"FNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109813","object_id":"column-109813","name":"CSCRAPDISCODE","name_without_path":"CSCRAPDISCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7744","name":"QMSCRAPDISPOSE","name_show_schema":"dbo.QMSCRAPDISPOSE"}]},{"id":"column-109814","object_id":"column-109814","name":"IDISPOSEFLOW","name_without_path":"IDISPOSEFLOW","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109815","object_id":"column-109815","name":"CDIMINVCODE","name_without_path":"CDIMINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109816","object_id":"column-109816","name":"CDIMUNITID","name_without_path":"CDIMUNITID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109817","object_id":"column-109817","name":"FDIMCHANGRATE","name_without_path":"FDIMCHANGRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109818","object_id":"column-109818","name":"FDIMQUANTITY","name_without_path":"FDIMQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109819","object_id":"column-109819","name":"FDIMNUM","name_without_path":"FDIMNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109820","object_id":"column-109820","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109821","object_id":"column-109821","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109822","object_id":"column-109822","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109823","object_id":"column-109823","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109824","object_id":"column-109824","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109825","object_id":"column-109825","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109826","object_id":"column-109826","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109827","object_id":"column-109827","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109828","object_id":"column-109828","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109829","object_id":"column-109829","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109830","object_id":"column-109830","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-109831","object_id":"column-109831","name":"CDEFINE22","name_without_path":"CDEFINE22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109832","object_id":"column-109832","name":"CDEFINE23","name_without_path":"CDEFINE23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109833","object_id":"column-109833","name":"CDEFINE24","name_without_path":"CDEFINE24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109834","object_id":"column-109834","name":"CDEFINE25","name_without_path":"CDEFINE25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109835","object_id":"column-109835","name":"CDEFINE26","name_without_path":"CDEFINE26","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109836","object_id":"column-109836","name":"CDEFINE27","name_without_path":"CDEFINE27","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109837","object_id":"column-109837","name":"CDEFINE28","name_without_path":"CDEFINE28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109838","object_id":"column-109838","name":"CDEFINE29","name_without_path":"CDEFINE29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109839","object_id":"column-109839","name":"CDEFINE30","name_without_path":"CDEFINE30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109840","object_id":"column-109840","name":"CDEFINE31","name_without_path":"CDEFINE31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109841","object_id":"column-109841","name":"CDEFINE32","name_without_path":"CDEFINE32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109842","object_id":"column-109842","name":"CDEFINE33","name_without_path":"CDEFINE33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109843","object_id":"column-109843","name":"CDEFINE34","name_without_path":"CDEFINE34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109844","object_id":"column-109844","name":"CDEFINE35","name_without_path":"CDEFINE35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109845","object_id":"column-109845","name":"CDEFINE36","name_without_path":"CDEFINE36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109846","object_id":"column-109846","name":"CDEFINE37","name_without_path":"CDEFINE37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109847","object_id":"column-109847","name":"BFLAG","name_without_path":"BFLAG","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109848","object_id":"column-109848","name":"BSTNEXTYEAR","name_without_path":"BSTNEXTYEAR","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109849","object_id":"column-109849","name":"FMATCOST","name_without_path":"FMATCOST","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109850","object_id":"column-109850","name":"FBADLOSE","name_without_path":"FBADLOSE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109851","object_id":"column-109851","name":"CDIMBATCH","name_without_path":"CDIMBATCH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109852","object_id":"column-109852","name":"DDIMVDATE","name_without_path":"DDIMVDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109853","object_id":"column-109853","name":"IDIMMASSDATE","name_without_path":"IDIMMASSDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109854","object_id":"column-109854","name":"CDIMMASSUNIT","name_without_path":"CDIMMASSUNIT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109855","object_id":"column-109855","name":"FSUMREWORKQTY","name_without_path":"FSUMREWORKQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109856","object_id":"column-109856","name":"FSUMREWORKNUM","name_without_path":"FSUMREWORKNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109857","object_id":"column-109857","name":"CBVENCODE","name_without_path":"CBVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109858","object_id":"column-109858","name":"iDIMExpiratDateCalcu","name_without_path":"iDIMExpiratDateCalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109859","object_id":"column-109859","name":"cDIMExpirationdate","name_without_path":"cDIMExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109860","object_id":"column-109860","name":"dDIMExpirationdate","name_without_path":"dDIMExpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109861","object_id":"column-109861","name":"CPUPOCODE","name_without_path":"CPUPOCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109862","object_id":"column-109862","name":"IPUPODID","name_without_path":"IPUPODID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109863","object_id":"column-109863","name":"MOORDEROPSEQ","name_without_path":"MOORDEROPSEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109864","object_id":"column-109864","name":"CBWHCODE","name_without_path":"CBWHCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-109865","object_id":"column-109865","name":"CBSYSBARCODE","name_without_path":"CBSYSBARCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_QMREJECTVOUCHERS_DEPARTMENT","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMREJECTVOUCHERS","foreign_table_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_verbose":"QMREJECTVOUCHERS","foreign_table_verbose_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_object_id":"t7741","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"CDEPCODE"}],"custom_fields":{}},{"name":"FK_QMREJECTVOUCHERS_QMSCRAPDISPOSE","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMREJECTVOUCHERS","foreign_table_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_verbose":"QMREJECTVOUCHERS","foreign_table_verbose_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_object_id":"t7741","primary_table":"QMSCRAPDISPOSE","primary_table_show_schema":"dbo.QMSCRAPDISPOSE","primary_table_verbose":"QMSCRAPDISPOSE","primary_table_verbose_show_schema":"dbo.QMSCRAPDISPOSE","primary_table_object_id":"t7744","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CSCRAPDISCODE","foreign_column_path":null,"foreign_column":"CSCRAPDISCODE"}],"custom_fields":{}},{"name":"FK_QMREJECTVOUCHERS_REASON","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMREJECTVOUCHERS","foreign_table_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_verbose":"QMREJECTVOUCHERS","foreign_table_verbose_show_schema":"dbo.QMREJECTVOUCHERS","foreign_table_object_id":"t7741","primary_table":"Reason","primary_table_show_schema":"dbo.Reason","primary_table_verbose":"Reason","primary_table_verbose_show_schema":"dbo.Reason","primary_table_object_id":"t7870","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cReasonCode","foreign_column_path":null,"foreign_column":"CREASONCODE"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_QMREJECTVOUCHERS","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"AUTOID","name":"AUTOID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};