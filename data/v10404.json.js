window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10404","name":"CRM_BaseCode_Act","subtype":"VIEW","is_user_defined":false,"description":null,"script":"---活动状态 67 -新建\r\nCREATE   view CRM_BaseCode_Act as   \r\nselect   \r\ndbo.Crm_BaseCode_base.ID as ID,   \r\n--dbo.Crm_BaseCode_base.cType as cType,   \r\ndbo.Crm_BaseCode_base.cCode as cCode,   \r\ndbo.Crm_BaseCode_Lang.cName as cName  \r\nfrom Crm_BaseCode_Base, Crm_BaseCode_Lang  \r\nwhere Crm_BaseCode_Base.id = Crm_BaseCode_Lang.id  \r\nAND CRM_BaseCode_Lang.LocaleID = dbo.CRM_GetLanguageID(N'')  \r\nand ((Crm_BaseCode_Base.id >22 and Crm_BaseCode_Base.id <34)  \r\nor Crm_BaseCode_Base.id in(67,203,204) )","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_BaseCode_Act"},{"field":"Type","value":"View"}],"columns":[{"id":"column-187980","object_id":"column-187980","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187981","object_id":"column-187981","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187982","object_id":"column-187982","name":"cName","name_without_path":"cName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};