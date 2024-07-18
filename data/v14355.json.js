window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14355","name":"vwUsed","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwUsed\r\nAS\r\nSELECT m.dtVoucherDate, m.strUnitID, s.strIncNode, ISNULL(s.dblAmount, 0) \r\n      AS dblAmount, m.strCurrencyID AS strBill\r\nFROM dbo.UA_Voucher m LEFT OUTER JOIN\r\n      dbo.UA_SubVoucher s ON m.intNoID = s.intNoID\r\nWHERE (LEFT(s.strIncNode, 1) = '2')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwUsed"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424716","object_id":"column-424716","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424717","object_id":"column-424717","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424718","object_id":"column-424718","name":"strIncNode","name_without_path":"strIncNode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424719","object_id":"column-424719","name":"dblAmount","name_without_path":"dblAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424720","object_id":"column-424720","name":"strBill","name_without_path":"strBill","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};