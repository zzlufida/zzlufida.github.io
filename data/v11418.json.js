window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11418","name":"hr_v_vouchertype","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW hr_v_vouchertype AS \r\n\tSELECT cSub_ID,cBusinessID,cBusinessDesc,cJoinRule,cUniqueKey,iSysFlag,bEndGrade,cSupBusinessID,iLevels,cFrom,cWhere,cPsnFilterQueryItem,iCardCode,iRosterCode \r\n\tFROM hr_bd_vouchertype_Base \r\n\tWHERE LocaleID=DBO.UDF_GetLocaleID()\r\n\tAND cBusinessId like 'HM%'\r\n\tAND bEndGrade = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_vouchertype"},{"field":"Type","value":"View"}],"columns":[{"id":"column-229035","object_id":"column-229035","name":"cSub_ID","name_without_path":"cSub_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229036","object_id":"column-229036","name":"cBusinessID","name_without_path":"cBusinessID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229037","object_id":"column-229037","name":"cBusinessDesc","name_without_path":"cBusinessDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229038","object_id":"column-229038","name":"cJoinRule","name_without_path":"cJoinRule","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229039","object_id":"column-229039","name":"cUniqueKey","name_without_path":"cUniqueKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229040","object_id":"column-229040","name":"iSysFlag","name_without_path":"iSysFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229041","object_id":"column-229041","name":"bEndGrade","name_without_path":"bEndGrade","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229042","object_id":"column-229042","name":"cSupBusinessID","name_without_path":"cSupBusinessID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229043","object_id":"column-229043","name":"iLevels","name_without_path":"iLevels","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229044","object_id":"column-229044","name":"cFrom","name_without_path":"cFrom","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229045","object_id":"column-229045","name":"cWhere","name_without_path":"cWhere","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229046","object_id":"column-229046","name":"cPsnFilterQueryItem","name_without_path":"cPsnFilterQueryItem","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229047","object_id":"column-229047","name":"iCardCode","name_without_path":"iCardCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229048","object_id":"column-229048","name":"iRosterCode","name_without_path":"iRosterCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};