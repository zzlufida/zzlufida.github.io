window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10237","name":"CM_QDataAuth","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view [dbo].[CM_QDataAuth]\r\nas\r\n\r\nselect  C.strContractID as ContractID, C.strContractKind as ContractKind,\r\n\tC.strSetupPerson as SetupPerson, C.strInurePerson as InurePerson,\r\n\tC.strVaryPerson as VaryPerson, C.strVaryPassPersonID as VaryPassPersonID,\r\n\tC.strPersonID as PersonID, C.strBisectionUnit as BisectionUnit, C.strDeptID as DeptID,\r\n\tCus.iID as CusIID, Ven.iID as VenIID, Dep.cDepCode as DepIID,strContractType as ContractType\r\nfrom CM_Contract_B C\r\nleft join Customer Cus on C.strBisectionUnit=Cus.cCusCode\r\nleft join Vendor Ven on C.strBisectionUnit=Ven.cVenCode\r\nleft join Department Dep on C.strDeptID=Dep.cDepCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QDataAuth"},{"field":"Type","value":"View"}],"columns":[{"id":"column-178762","object_id":"column-178762","name":"ContractID","name_without_path":"ContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178763","object_id":"column-178763","name":"ContractKind","name_without_path":"ContractKind","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178764","object_id":"column-178764","name":"SetupPerson","name_without_path":"SetupPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178765","object_id":"column-178765","name":"InurePerson","name_without_path":"InurePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178766","object_id":"column-178766","name":"VaryPerson","name_without_path":"VaryPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178767","object_id":"column-178767","name":"VaryPassPersonID","name_without_path":"VaryPassPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178768","object_id":"column-178768","name":"PersonID","name_without_path":"PersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178769","object_id":"column-178769","name":"BisectionUnit","name_without_path":"BisectionUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178770","object_id":"column-178770","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178771","object_id":"column-178771","name":"CusIID","name_without_path":"CusIID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178772","object_id":"column-178772","name":"VenIID","name_without_path":"VenIID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178773","object_id":"column-178773","name":"DepIID","name_without_path":"DepIID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178774","object_id":"column-178774","name":"ContractType","name_without_path":"ContractType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};