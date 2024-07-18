window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10406","name":"crm_biztype","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view crm_biztype      \r\n\tas      \r\n\tselect biztype= case cname       \r\n\t  when 'bFQSK' then (select EnumName from AA_Enum where EnumType='SA.CBusType'  and EnumIndex=2 and localeid='zh-CN')       \r\n\t  when 'bZYXS' then (select EnumName from AA_Enum where EnumType='SA.CBusType'  and EnumIndex=3 and localeid='zh-CN')   end      \r\n\tfrom accinformation  WITH(NOLOCK)       \r\n\twhere cSysId=N'SA' and cName in('bFQSK','bZYXS') and cValue='True'      \r\n\tunion     \r\n\tselect biztype= case cname       \r\n\t  when 'bCommitSell' then (select EnumName from AA_Enum where EnumType='SA.CBusType' and EnumIndex=1 and localeid='zh-CN') end      \r\n\tfrom accinformation WITH(NOLOCK)       \r\n\twhere cSysId=N'AA' and cName ='bCommitSell' and cValue='True'      \r\n\tunion      \r\n\tselect biztype=EnumCode from AA_Enum where EnumType='SA.CBusType' and EnumIndex=0 and localeid='zh-CN'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"crm_biztype"},{"field":"Type","value":"View"}],"columns":[{"id":"column-187993","object_id":"column-187993","name":"biztype","name_without_path":"biztype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};