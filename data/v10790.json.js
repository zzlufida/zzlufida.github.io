window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10790","name":"fm_gltarget","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW fm_gltarget\r\n AS \r\n select fm_gltarget_base.strTargetID,fm_gltarget_base.strTargetName, case when List1.EmumName IS NULL  then N'' else List1.EmumName end AS strCashType, case when List2.EmumName IS NULL  then N'' else List2.EmumName end AS strSubject,fm_gltarget_base.bSign,fm_gltarget_base.bSeal,fm_gltarget_base.bPlan,fm_gltarget_base.ufts,fm_gltarget_base.bUsed\r\n from fm_gltarget_base  LEFT join FM_EnumList as list1 on fm_gltarget_base.strCashType = List1.EmumID and list1.localeid = dbo.UDF_GetLocaleID() \r\n LEFT join FM_EnumList as list2 on fm_gltarget_base.strSubject = List2.EmumID and list2.localeid = dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fm_gltarget"},{"field":"Type","value":"View"}],"columns":[{"id":"column-205100","object_id":"column-205100","name":"strTargetID","name_without_path":"strTargetID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205101","object_id":"column-205101","name":"strTargetName","name_without_path":"strTargetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205102","object_id":"column-205102","name":"strCashType","name_without_path":"strCashType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"180","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205103","object_id":"column-205103","name":"strSubject","name_without_path":"strSubject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"180","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205104","object_id":"column-205104","name":"bSign","name_without_path":"bSign","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205105","object_id":"column-205105","name":"bSeal","name_without_path":"bSeal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205106","object_id":"column-205106","name":"bPlan","name_without_path":"bPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205107","object_id":"column-205107","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205108","object_id":"column-205108","name":"bUsed","name_without_path":"bUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"TR_fm_gltarget_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"TR_fm_gltarget_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"TR_fm_gltarget_Insteadofupdate","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};