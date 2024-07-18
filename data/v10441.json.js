window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10441","name":"Crm_RelReceiveforVouch","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create VIEW Crm_RelReceiveforVouch\r\nas \r\n\r\nselect distinct 'cmtype' + b.cConType as cVouchType,b.cConID as cVouchCode,b.iID as cAPReceiveID from Ap_CloseBill a\r\nINNER JOIN Ap_CloseBills b on a.iID = b.iID\r\nwhere a.cFlag = 'AR' and isnull(b.cConID,'') <> ''\r\n\r\nUNION\r\n\r\nselect distinct 'cmexectype' as cVouchType,b.cExecID as cVouchCode,b.iID as cAPReceiveID from Ap_CloseBill a\r\nINNER JOIN Ap_CloseBills b on a.iID = b.iID\r\nwhere a.cFlag = 'AR' and isnull(b.cExecID,'') <> ''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Crm_RelReceiveforVouch"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189367","object_id":"column-189367","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189368","object_id":"column-189368","name":"cVouchCode","name_without_path":"cVouchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189369","object_id":"column-189369","name":"cAPReceiveID","name_without_path":"cAPReceiveID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};