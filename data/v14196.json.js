window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14196","name":"vwBankSRMX","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--7、vwBankSRMX\r\nCREATE VIEW vwBankSRMX\r\nAS\r\nSELECT UA_Voucher.dtVoucherDate, UA_Voucher.strUnitID, UA_Voucher.strUnitName, \r\n    UA_Voucher.strAccBankID, UA_BankDef.strAccBankName, \r\n    UA_BankDef.strAccBankAccount, UA_SubVoucher.dblAmount\r\nFROM UA_Voucher INNER JOIN\r\n    UA_BankDef ON UA_Voucher.strAccBankID = UA_BankDef.strAccBankID INNER JOIN\r\n    UA_SubVoucher ON UA_Voucher.intNoID = UA_SubVoucher.intNoID\r\nWHERE (LEFT(UA_Voucher.strVoucherType, 1) = '收')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwBankSRMX"},{"field":"Type","value":"View"}],"columns":[{"id":"column-420748","object_id":"column-420748","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420749","object_id":"column-420749","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420750","object_id":"column-420750","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420751","object_id":"column-420751","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420752","object_id":"column-420752","name":"strAccBankName","name_without_path":"strAccBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420753","object_id":"column-420753","name":"strAccBankAccount","name_without_path":"strAccBankAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-420754","object_id":"column-420754","name":"dblAmount","name_without_path":"dblAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};