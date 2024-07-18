window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7692","name":"QMCHECKGUIDE","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QMCHECKGUIDE"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-107514","object_id":"column-107514","name":"CHKGUIDEGUID","name_without_path":"CHKGUIDEGUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107515","object_id":"column-107515","name":"CCHKGUIDECODE","name_without_path":"CCHKGUIDECODE","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107516","object_id":"column-107516","name":"CCHKGUIDENAME","name_without_path":"CCHKGUIDENAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107517","object_id":"column-107517","name":"CINPORTGRADE","name_without_path":"CINPORTGRADE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107518","object_id":"column-107518","name":"CGUIDEUNIT","name_without_path":"CGUIDEUNIT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107519","object_id":"column-107519","name":"CCHKITEMCODE","name_without_path":"CCHKITEMCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7694","name":"QMCHECKITEM","name_show_schema":"dbo.QMCHECKITEM"}]},{"id":"column-107520","object_id":"column-107520","name":"BREF","name_without_path":"BREF","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107521","object_id":"column-107521","name":"CMEMO","name_without_path":"CMEMO","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107522","object_id":"column-107522","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107523","object_id":"column-107523","name":"CINSLEVEL","name_without_path":"CINSLEVEL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107524","object_id":"column-107524","name":"FAQL","name_without_path":"FAQL","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107525","object_id":"column-107525","name":"CBUGGRADE","name_without_path":"CBUGGRADE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107526","object_id":"column-107526","name":"CCHKGUIDTYPE","name_without_path":"CCHKGUIDTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":"'1'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107527","object_id":"column-107527","name":"IDTMETHOD","name_without_path":"IDTMETHOD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107528","object_id":"column-107528","name":"FDTRATE","name_without_path":"FDTRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107529","object_id":"column-107529","name":"FDTQUANTITY","name_without_path":"FDTQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107530","object_id":"column-107530","name":"IDTSTYLE","name_without_path":"IDTSTYLE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107531","object_id":"column-107531","name":"CRULECODE","name_without_path":"CRULECODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107532","object_id":"column-107532","name":"BSYNCHRON","name_without_path":"BSYNCHRON","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107533","object_id":"column-107533","name":"CGROUPCODE","name_without_path":"CGROUPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107534","object_id":"column-107534","name":"CGCOMUNITCODE","name_without_path":"CGCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107535","object_id":"column-107535","name":"bBreakCheck","name_without_path":"bBreakCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107536","object_id":"column-107536","name":"bMustBreak","name_without_path":"bMustBreak","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107537","object_id":"column-107537","name":"CROUNDED","name_without_path":"CROUNDED","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107538","object_id":"column-107538","name":"BROUNDED","name_without_path":"BROUNDED","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107539","object_id":"column-107539","name":"BROHS","name_without_path":"BROHS","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107540","object_id":"column-107540","name":"CCHKSTANDARDPROVISION","name_without_path":"CCHKSTANDARDPROVISION","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107541","object_id":"column-107541","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107542","object_id":"column-107542","name":"DCREATEDATE","name_without_path":"DCREATEDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107543","object_id":"column-107543","name":"CMODIFIER","name_without_path":"CMODIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-107544","object_id":"column-107544","name":"DMODIFYDATE","name_without_path":"DMODIFYDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_QMCHECKGUIDE_QMCHECKITEM","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKGUIDE","foreign_table_show_schema":"dbo.QMCHECKGUIDE","foreign_table_verbose":"QMCHECKGUIDE","foreign_table_verbose_show_schema":"dbo.QMCHECKGUIDE","foreign_table_object_id":"t7692","primary_table":"QMCHECKITEM","primary_table_show_schema":"dbo.QMCHECKITEM","primary_table_verbose":"QMCHECKITEM","primary_table_verbose_show_schema":"dbo.QMCHECKITEM","primary_table_object_id":"t7694","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CCHKITEMCODE","foreign_column_path":null,"foreign_column":"CCHKITEMCODE"}],"custom_fields":{}},{"name":"FK_QMCHECKPROJECTS_QMCHECKGUIDE","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKPROJECTS","foreign_table_show_schema":"dbo.QMCHECKPROJECTS","foreign_table_verbose":"QMCHECKPROJECTS","foreign_table_verbose_show_schema":"dbo.QMCHECKPROJECTS","foreign_table_object_id":"t7701","primary_table":"QMCHECKGUIDE","primary_table_show_schema":"dbo.QMCHECKGUIDE","primary_table_verbose":"QMCHECKGUIDE","primary_table_verbose_show_schema":"dbo.QMCHECKGUIDE","primary_table_object_id":"t7692","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CCHKGUIDECODE","foreign_column_path":null,"foreign_column":"CCHKGUIDECODE"}],"custom_fields":{}},{"name":"FK_QMCHECKVOUCHERS_QMCHECKGUIDE","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKVOUCHERS","foreign_table_show_schema":"dbo.QMCHECKVOUCHERS","foreign_table_verbose":"QMCHECKVOUCHERS","foreign_table_verbose_show_schema":"dbo.QMCHECKVOUCHERS","foreign_table_object_id":"t7711","primary_table":"QMCHECKGUIDE","primary_table_show_schema":"dbo.QMCHECKGUIDE","primary_table_verbose":"QMCHECKGUIDE","primary_table_verbose_show_schema":"dbo.QMCHECKGUIDE","primary_table_object_id":"t7692","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CCHKGUIDECODE","foreign_column_path":null,"foreign_column":"CCHKGUIDECODE"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_QMCHECKGUIDE","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CCHKGUIDECODE","name":"CCHKGUIDECODE"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};