window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6454","name":"hr_sys_itemdict_Base","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_sys_itemdict_Base"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-78823","object_id":"column-78823","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6456","name":"hr_sys_setdict_Base","name_show_schema":"dbo.hr_sys_setdict_Base"}]},{"id":"column-78824","object_id":"column-78824","name":"citemCode","name_without_path":"citemCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78825","object_id":"column-78825","name":"vitemName","name_without_path":"vitemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78826","object_id":"column-78826","name":"vdescription","name_without_path":"vdescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78827","object_id":"column-78827","name":"iitemType","name_without_path":"iitemType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78828","object_id":"column-78828","name":"vReferenceObj","name_without_path":"vReferenceObj","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78829","object_id":"column-78829","name":"bLastLevelFlag","name_without_path":"bLastLevelFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78830","object_id":"column-78830","name":"iitemLen","name_without_path":"iitemLen","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78831","object_id":"column-78831","name":"iitemDec","name_without_path":"iitemDec","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78832","object_id":"column-78832","name":"bsysFlag","name_without_path":"bsysFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78833","object_id":"column-78833","name":"brecordFlag","name_without_path":"brecordFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78834","object_id":"column-78834","name":"bnullFlag","name_without_path":"bnullFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78835","object_id":"column-78835","name":"vDefault","name_without_path":"vDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78836","object_id":"column-78836","name":"bdelFlag","name_without_path":"bdelFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78837","object_id":"column-78837","name":"ishowOrder","name_without_path":"ishowOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"999","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78838","object_id":"column-78838","name":"bdefault","name_without_path":"bdefault","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78839","object_id":"column-78839","name":"bDisplay","name_without_path":"bDisplay","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78840","object_id":"column-78840","name":"vMemo","name_without_path":"vMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-78841","object_id":"column-78841","name":"LocaleID","name_without_path":"LocaleID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":"'zh-CN'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6456","name":"hr_sys_setdict_Base","name_show_schema":"dbo.hr_sys_setdict_Base"}]}],"relations":[{"name":"FK_HR_SYS_I_REFERENCE_HR_SYS_S","title":null,"description":null,"is_user_defined":false,"foreign_table":"hr_sys_itemdict_Base","foreign_table_show_schema":"dbo.hr_sys_itemdict_Base","foreign_table_verbose":"hr_sys_itemdict_Base","foreign_table_verbose_show_schema":"dbo.hr_sys_itemdict_Base","foreign_table_object_id":"t6454","primary_table":"hr_sys_setdict_Base","primary_table_show_schema":"dbo.hr_sys_setdict_Base","primary_table_verbose":"hr_sys_setdict_Base","primary_table_verbose_show_schema":"dbo.hr_sys_setdict_Base","primary_table_object_id":"t6456","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTableCode","foreign_column_path":null,"foreign_column":"cTableCode"},{"primary_column_path":null,"primary_column":"LocaleID","foreign_column_path":null,"foreign_column":"LocaleID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_HR_SYS_ITEMDICT","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cTableCode","name":"cTableCode"},{"path":null,"name_without_path":"citemCode","name":"citemCode"},{"path":null,"name_without_path":"LocaleID","name":"LocaleID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};