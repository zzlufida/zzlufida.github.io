window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14177","name":"vw_apar_relxj_cm","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view vw_apar_relxj_cm\r\nas \r\n--合同结算单联查现结收付款单\r\nselect ap.iID,ap.cCancelNo,b.BalancesGuid  from CM_Balance a inner join CM_Balances b on a.cBalanceID =b.cBalanceID inner join ap_closebill ap on a.strSpare3 =ap.cCancelNo","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vw_apar_relxj_cm"},{"field":"Type","value":"View"}],"columns":[{"id":"column-419269","object_id":"column-419269","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419270","object_id":"column-419270","name":"cCancelNo","name_without_path":"cCancelNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-419271","object_id":"column-419271","name":"BalancesGuid","name_without_path":"BalancesGuid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};