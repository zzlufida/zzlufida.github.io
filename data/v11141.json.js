window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11141","name":"HR_CT370","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: HR_CT370                                               */\r\n/*==============================================================*/\r\ncreate view HR_CT370 as \r\nselect cCodeID,vDescription,vSimpleName,vSimpleSpell,iLevels,cpCodeID,bSysFlag,bChildFlag,bHideFlag,vMemo from hr_ct370_base where LocaleID=DBO.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_CT370"},{"field":"Type","value":"View"}],"columns":[{"id":"column-222509","object_id":"column-222509","name":"cCodeID","name_without_path":"cCodeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222510","object_id":"column-222510","name":"vDescription","name_without_path":"vDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222511","object_id":"column-222511","name":"vSimpleName","name_without_path":"vSimpleName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222512","object_id":"column-222512","name":"vSimpleSpell","name_without_path":"vSimpleSpell","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"70","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222513","object_id":"column-222513","name":"iLevels","name_without_path":"iLevels","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222514","object_id":"column-222514","name":"cpCodeID","name_without_path":"cpCodeID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222515","object_id":"column-222515","name":"bSysFlag","name_without_path":"bSysFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222516","object_id":"column-222516","name":"bChildFlag","name_without_path":"bChildFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222517","object_id":"column-222517","name":"bHideFlag","name_without_path":"bHideFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222518","object_id":"column-222518","name":"vMemo","name_without_path":"vMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};