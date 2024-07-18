window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9798","name":"AA_BusObject","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW AA_BusObject      \r\nAS      \r\nSELECT [cBusObId], [cBusObName], [iAuthType], [bAuthControl],     \r\n[cSub_Id], [cMark], [pubufts], [iFuncType],[iOrder],[bLocked],[cLockedBy],[bNoAuth],    \r\nbDeptControl,bPersonControl,bAuthDim1Control,bAuthDim2Control,bAuthDim3Control,bAuthDim4Control,bCustDimControl,bAuthDimControl,cAuthDimControlScope\r\nFrom AA_BusObject_base     \r\nwhere langid =dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_BusObject"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156408","object_id":"column-156408","name":"cBusObId","name_without_path":"cBusObId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156388","object_id":"column-156388","name":"cBusObName","name_without_path":"cBusObName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156389","object_id":"column-156389","name":"iAuthType","name_without_path":"iAuthType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156390","object_id":"column-156390","name":"bAuthControl","name_without_path":"bAuthControl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156391","object_id":"column-156391","name":"cSub_Id","name_without_path":"cSub_Id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156392","object_id":"column-156392","name":"cMark","name_without_path":"cMark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156393","object_id":"column-156393","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156394","object_id":"column-156394","name":"iFuncType","name_without_path":"iFuncType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156395","object_id":"column-156395","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156396","object_id":"column-156396","name":"bLocked","name_without_path":"bLocked","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156397","object_id":"column-156397","name":"cLockedBy","name_without_path":"cLockedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156398","object_id":"column-156398","name":"bNoAuth","name_without_path":"bNoAuth","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156399","object_id":"column-156399","name":"bDeptControl","name_without_path":"bDeptControl","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156400","object_id":"column-156400","name":"bPersonControl","name_without_path":"bPersonControl","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156401","object_id":"column-156401","name":"bAuthDim1Control","name_without_path":"bAuthDim1Control","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156402","object_id":"column-156402","name":"bAuthDim2Control","name_without_path":"bAuthDim2Control","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156403","object_id":"column-156403","name":"bAuthDim3Control","name_without_path":"bAuthDim3Control","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156404","object_id":"column-156404","name":"bAuthDim4Control","name_without_path":"bAuthDim4Control","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156405","object_id":"column-156405","name":"bCustDimControl","name_without_path":"bCustDimControl","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156406","object_id":"column-156406","name":"bAuthDimControl","name_without_path":"bAuthDimControl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156407","object_id":"column-156407","name":"cAuthDimControlScope","name_without_path":"cAuthDimControlScope","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"AA_BusObject_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"AA_BusObject_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"AA_BusObject_update","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};