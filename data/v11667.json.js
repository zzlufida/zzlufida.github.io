window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11667","name":"NE_CostApply_Code_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_CostApply_Code_View\r\nas\r\nselect distinct vouch.code as VoucherCode from NE_CostApply as vouch with(nolock)\r\ninner join NE_OperationType with(nolock) \r\n\ton vouch.OperationTypeCode=NE_OperationType.Code and NE_OperationType.TypeID=4","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_CostApply_Code_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-248486","object_id":"column-248486","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};