window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12404","name":"SR_View_InitiativeSrvSet","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE            VIEW SR_View_InitiativeSrvSet \r\nAS\r\n\r\n\r\nselect \r\n\r\nSR_InitiativeSrvSet.OID \t\t\t,SR_InitiativeSrvSet.ID as cSetCode,\r\nSR_InitiativeSrvSet.cSetName \t\t\t,SR_InitiativeSrvSet.cInvClass,\r\ninventoryclass.cInvCName as cInvClassName\t,Inventory.cInvName as cInvName,\r\nSR_InitiativeSrvSet.cInvCode\t\t\t,SR_InitiativeSrvSet.cConsignmentDays,\r\nSR_InitiativeSrvSet.cWorkLoadSum\t\t,SR_InitiativeSrvSet.bCyc,\r\nSR_InitiativeSrvSet.cPersonCode\t\t\t,person.cPersonName as cPersonName,\r\nSR_InitiativeSrvSet.cSetTime\t\t\t,SR_InitiativeSrvSet.cSetter,\r\ndepartment.cdepname as cDepartName\t\t,department.cdepcode as cDepartCode,\r\nSR_InitiativeSrvSet.cXFCode,\r\nSR_InitiativeSrvSet.ufts,\r\ncase (select cValue from accinformation where csysid='SR' and cname='txtbDays') \r\n\r\nwhen N'行业' then tradeclass.cTradeCName\r\nwhen N'地区' then DistrictClass.cDCName\r\nwhen N'客户分类' then customerclass.cCCName\r\n else ''\r\n end as cXFName    \r\n\r\n\r\nfrom SR_InitiativeSrvSet\r\nleft  join inventoryclass on inventoryclass.cInvCCode \t=SR_InitiativeSrvSet.cInvClass\r\nleft  join Inventory \t  on Inventory.cInvCode\t\t=SR_InitiativeSrvSet.cInvCode\r\nleft  join person \t  on person.cPersonCode\t\t=SR_InitiativeSrvSet.cPersonCode\r\nleft  join department     on person.cDepcode\t\t=department.cdepcode\r\nleft  join customerclass  on customerclass.cCCCode\t=SR_InitiativeSrvSet.cXFCode\r\nleft  join tradeclass  \t  on tradeclass.cTradeCCode\t=SR_InitiativeSrvSet.cXFCode\r\nleft  join DistrictClass  on DistrictClass.cDCCode\t=SR_InitiativeSrvSet.cXFCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_View_InitiativeSrvSet"},{"field":"Type","value":"View"}],"columns":[{"id":"column-303206","object_id":"column-303206","name":"OID","name_without_path":"OID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303207","object_id":"column-303207","name":"cSetCode","name_without_path":"cSetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303208","object_id":"column-303208","name":"cSetName","name_without_path":"cSetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303209","object_id":"column-303209","name":"cInvClass","name_without_path":"cInvClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303210","object_id":"column-303210","name":"cInvClassName","name_without_path":"cInvClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303211","object_id":"column-303211","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303212","object_id":"column-303212","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303213","object_id":"column-303213","name":"cConsignmentDays","name_without_path":"cConsignmentDays","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303214","object_id":"column-303214","name":"cWorkLoadSum","name_without_path":"cWorkLoadSum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303215","object_id":"column-303215","name":"bCyc","name_without_path":"bCyc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303216","object_id":"column-303216","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303217","object_id":"column-303217","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303218","object_id":"column-303218","name":"cSetTime","name_without_path":"cSetTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303219","object_id":"column-303219","name":"cSetter","name_without_path":"cSetter","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303220","object_id":"column-303220","name":"cDepartName","name_without_path":"cDepartName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303221","object_id":"column-303221","name":"cDepartCode","name_without_path":"cDepartCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303222","object_id":"column-303222","name":"cXFCode","name_without_path":"cXFCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303223","object_id":"column-303223","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303224","object_id":"column-303224","name":"cXFName","name_without_path":"cXFName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};