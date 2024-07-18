window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11248","name":"hr_sys_function","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW hr_sys_function AS SELECT cSub_ID,cSub_Name,cAuth_ID,cSupAuth_ID,cAuth_Name,bSetConfig,bNeedVoucher,vVourcherType,bNeedCarded,iSetType,cCardDriveTable,vClsCode from hr_sys_function_Base where LocaleID=DBO.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_sys_function"},{"field":"Type","value":"View"}],"columns":[{"id":"column-223916","object_id":"column-223916","name":"cSub_ID","name_without_path":"cSub_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223917","object_id":"column-223917","name":"cSub_Name","name_without_path":"cSub_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223918","object_id":"column-223918","name":"cAuth_ID","name_without_path":"cAuth_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223919","object_id":"column-223919","name":"cSupAuth_ID","name_without_path":"cSupAuth_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223920","object_id":"column-223920","name":"cAuth_Name","name_without_path":"cAuth_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223921","object_id":"column-223921","name":"bSetConfig","name_without_path":"bSetConfig","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223922","object_id":"column-223922","name":"bNeedVoucher","name_without_path":"bNeedVoucher","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223923","object_id":"column-223923","name":"vVourcherType","name_without_path":"vVourcherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223924","object_id":"column-223924","name":"bNeedCarded","name_without_path":"bNeedCarded","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223925","object_id":"column-223925","name":"iSetType","name_without_path":"iSetType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223926","object_id":"column-223926","name":"cCardDriveTable","name_without_path":"cCardDriveTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-223927","object_id":"column-223927","name":"vClsCode","name_without_path":"vClsCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};