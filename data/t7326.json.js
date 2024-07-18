window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7326","name":"Person (职员档案)","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Person"},{"field":"Type","value":"Table"},{"field":"Title","value":"职员档案"},{"field":"Module","value":[{"_type":"link","name":"基础档案","id":"m107"},{"_type":"link","name":"采购管理","id":"m108"},{"_type":"link","name":"总账财务","id":"m112"}]}],"columns":[{"id":"column-100185","object_id":"column-100185","name":"cPersonCode (职员编码)","name_without_path":"cPersonCode (职员编码)","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100186","object_id":"column-100186","name":"cPersonName (职员姓名)","name_without_path":"cPersonName (职员姓名)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100187","object_id":"column-100187","name":"cDepCode (部门编码)","name_without_path":"cDepCode (部门编码)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department (部门基本信息)","name_show_schema":"dbo.Department (部门基本信息)"}]},{"id":"column-100188","object_id":"column-100188","name":"cPersonProp (职员属性)","name_without_path":"cPersonProp (职员属性)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100189","object_id":"column-100189","name":"fCreditQuantity (信用额度)","name_without_path":"fCreditQuantity (信用额度)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100190","object_id":"column-100190","name":"iCreDate (信用期限)","name_without_path":"iCreDate (信用期限)","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100191","object_id":"column-100191","name":"cCreGrade (信用等级)","name_without_path":"cCreGrade (信用等级)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100192","object_id":"column-100192","name":"iLowRate (最低折扣率)","name_without_path":"iLowRate (最低折扣率)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100193","object_id":"column-100193","name":"cOfferGrade (销售贡献等级)","name_without_path":"cOfferGrade (销售贡献等级)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100194","object_id":"column-100194","name":"iOfferRate (销售贡献率)","name_without_path":"iOfferRate (销售贡献率)","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100195","object_id":"column-100195","name":"pubufts (时间戳)","name_without_path":"pubufts (时间戳)","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100196","object_id":"column-100196","name":"cPersonEmail (Email)","name_without_path":"cPersonEmail (Email)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100197","object_id":"column-100197","name":"cPersonPhone (电话)","name_without_path":"cPersonPhone (电话)","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100198","object_id":"column-100198","name":"dPValidDate (生效日期)","name_without_path":"dPValidDate (生效日期)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-100199","object_id":"column-100199","name":"dPInValidDate (失效日期)","name_without_path":"dPInValidDate (失效日期)","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__Person__cDepCode__35D2D7FA","title":null,"description":null,"is_user_defined":false,"foreign_table":"Person","foreign_table_show_schema":"dbo.Person","foreign_table_verbose":"Person (职员档案)","foreign_table_verbose_show_schema":"dbo.Person (职员档案)","foreign_table_object_id":"t7326","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department (部门基本信息)","primary_table_verbose_show_schema":"dbo.Department (部门基本信息)","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cDepCode"}],"custom_fields":{}},{"name":"FK__AssemVouc__cPers__0AB36FCB","title":null,"description":null,"is_user_defined":false,"foreign_table":"AssemVouch","foreign_table_show_schema":"dbo.AssemVouch","foreign_table_verbose":"AssemVouch (组装拆卸形态转换单主表)","foreign_table_verbose_show_schema":"dbo.AssemVouch (组装拆卸形态转换单主表)","foreign_table_object_id":"t3900","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__CheckVouc__cPers__0BA79404","title":null,"description":null,"is_user_defined":false,"foreign_table":"CheckVouch","foreign_table_show_schema":"dbo.CheckVouch","foreign_table_verbose":"CheckVouch (盘点单主表)","foreign_table_verbose_show_schema":"dbo.CheckVouch (盘点单主表)","foreign_table_object_id":"t4566","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__DispatchL__cPers__0C9BB83D","title":null,"description":null,"is_user_defined":false,"foreign_table":"DispatchList","foreign_table_show_schema":"dbo.DispatchList","foreign_table_verbose":"DispatchList (发货退货单主表)","foreign_table_verbose_show_schema":"dbo.DispatchList (发货退货单主表)","foreign_table_object_id":"t4914","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__EnDispatc__cPers__0D8FDC76","title":null,"description":null,"is_user_defined":false,"foreign_table":"EnDispatch","foreign_table_show_schema":"dbo.EnDispatch","foreign_table_verbose":"EnDispatch (委托代销发货单主表)","foreign_table_verbose_show_schema":"dbo.EnDispatch (委托代销发货单主表)","foreign_table_object_id":"t5085","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__ExpenseVo__cPers__0E8400AF","title":null,"description":null,"is_user_defined":false,"foreign_table":"ExpenseVouch","foreign_table_show_schema":"dbo.ExpenseVouch","foreign_table_verbose":"ExpenseVouch (代垫费用单主表)","foreign_table_verbose_show_schema":"dbo.ExpenseVouch (代垫费用单主表)","foreign_table_object_id":"t5304","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__GL_accass__cpers__0F7824E8","title":null,"description":null,"is_user_defined":false,"foreign_table":"GL_accass","foreign_table_show_schema":"dbo.GL_accass","foreign_table_verbose":"GL_accass (辅助总账)","foreign_table_verbose_show_schema":"dbo.GL_accass (辅助总账)","foreign_table_object_id":"t5626","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cperson_id"}],"custom_fields":{}},{"name":"FK__GL_accvou__cpers__106C4921","title":null,"description":null,"is_user_defined":false,"foreign_table":"GL_accvouch","foreign_table_show_schema":"dbo.GL_accvouch","foreign_table_verbose":"GL_accvouch (凭证及明细账)","foreign_table_verbose_show_schema":"dbo.GL_accvouch (凭证及明细账)","foreign_table_object_id":"t5633","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cperson_id"}],"custom_fields":{}},{"name":"FK__GL_bautot__cpers__11606D5A","title":null,"description":null,"is_user_defined":false,"foreign_table":"GL_bautotran","foreign_table_show_schema":"dbo.GL_bautotran","foreign_table_verbose":"GL_bautotran (总账自动转帐定义表)","foreign_table_verbose_show_schema":"dbo.GL_bautotran (总账自动转帐定义表)","foreign_table_object_id":"t5639","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cperson_id"}],"custom_fields":{}},{"name":"FK__GL_bfreq__cperso__12549193","title":null,"description":null,"is_user_defined":false,"foreign_table":"GL_bfreq","foreign_table_show_schema":"dbo.GL_bfreq","foreign_table_verbose":"GL_bfreq (总账常用凭证表)","foreign_table_verbose_show_schema":"dbo.GL_bfreq (总账常用凭证表)","foreign_table_object_id":"t5641","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cperson_id"}],"custom_fields":{}},{"name":"FK__JustInVou__cPers__1348B5CC","title":null,"description":null,"is_user_defined":false,"foreign_table":"JustInVouch","foreign_table_show_schema":"dbo.JustInVouch","foreign_table_verbose":"JustInVouch (出入库调整单主表)","foreign_table_verbose_show_schema":"dbo.JustInVouch (出入库调整单主表)","foreign_table_object_id":"t6911","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__MaterialAppVouch__cPerso__16252277","title":null,"description":null,"is_user_defined":false,"foreign_table":"MaterialAppVouch","foreign_table_show_schema":"dbo.MaterialAppVouch","foreign_table_verbose":"MaterialAppVouch (领料申请单主表)","foreign_table_verbose_show_schema":"dbo.MaterialAppVouch (领料申请单主表)","foreign_table_object_id":"t6953","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__PO_Pomain__cPers__143CDA05","title":null,"description":null,"is_user_defined":false,"foreign_table":"PO_Pomain","foreign_table_show_schema":"dbo.PO_Pomain","foreign_table_verbose":"PO_Pomain (采购订单主表)","foreign_table_verbose_show_schema":"dbo.PO_Pomain (采购订单主表)","foreign_table_object_id":"t7589","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_PP_ProductPO_Person2","title":null,"description":null,"is_user_defined":false,"foreign_table":"PP_ProductPO","foreign_table_show_schema":"dbo.PP_ProductPO","foreign_table_verbose":"PP_ProductPO (生产订单总表)","foreign_table_verbose_show_schema":"dbo.PP_ProductPO (生产订单总表)","foreign_table_object_id":"t7609","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"PuAppVouch_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_AppVouch","foreign_table_show_schema":"dbo.PU_AppVouch","foreign_table_verbose":"PU_AppVouch (采购请购单主表)","foreign_table_verbose_show_schema":"dbo.PU_AppVouch (采购请购单主表)","foreign_table_object_id":"t7634","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"PuArrival_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_ArrivalVouch","foreign_table_show_schema":"dbo.PU_ArrivalVouch","foreign_table_verbose":"PU_ArrivalVouch (采购到货单主表)","foreign_table_verbose_show_schema":"dbo.PU_ArrivalVouch (采购到货单主表)","foreign_table_object_id":"t7640","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__PU_T_VMIU__cPers__203EF74E","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch (代管挂帐确认单主表)","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch (代管挂帐确认单主表)","foreign_table_object_id":"t7654","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__PurBillVo__cPers__1530FE3E","title":null,"description":null,"is_user_defined":false,"foreign_table":"PurBillVouch","foreign_table_show_schema":"dbo.PurBillVouch","foreign_table_verbose":"PurBillVouch (采购发票主表)","foreign_table_verbose_show_schema":"dbo.PurBillVouch (采购发票主表)","foreign_table_object_id":"t7666","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_QMCHECKPROJECTS_PERSON","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKPROJECTS","foreign_table_show_schema":"dbo.QMCHECKPROJECTS","foreign_table_verbose":"QMCHECKPROJECTS (质量检验方案子表)","foreign_table_verbose_show_schema":"dbo.QMCHECKPROJECTS (质量检验方案子表)","foreign_table_object_id":"t7701","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"CPERSONCODE"}],"custom_fields":{}},{"name":"FK_QMCHECKVOUCHER_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKVOUCHER","foreign_table_show_schema":"dbo.QMCHECKVOUCHER","foreign_table_verbose":"QMCHECKVOUCHER (检验单主表)","foreign_table_verbose_show_schema":"dbo.QMCHECKVOUCHER (检验单主表)","foreign_table_object_id":"t7705","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"CYIELDERCODE"}],"custom_fields":{}},{"name":"FK_QMCHECKVOUCHER_PERSON1","title":null,"description":null,"is_user_defined":false,"foreign_table":"QMCHECKVOUCHER","foreign_table_show_schema":"dbo.QMCHECKVOUCHER","foreign_table_verbose":"QMCHECKVOUCHER (检验单主表)","foreign_table_verbose_show_schema":"dbo.QMCHECKVOUCHER (检验单主表)","foreign_table_object_id":"t7705","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"CCHECKPERSONCODE"}],"custom_fields":{}},{"name":"FK__RdRecord__cPerso__16252277","title":null,"description":null,"is_user_defined":false,"foreign_table":"rdrecord891bak","foreign_table_show_schema":"dbo.rdrecord891bak","foreign_table_verbose":"rdrecord891bak (升级备份)","foreign_table_verbose_show_schema":"dbo.rdrecord891bak (升级备份)","foreign_table_object_id":"t7854","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__SA_QuoMai__cPers__4A44B052","title":null,"description":null,"is_user_defined":false,"foreign_table":"SA_QuoMain","foreign_table_show_schema":"dbo.SA_QuoMain","foreign_table_verbose":"SA_QuoMain (销售报价单主表)","foreign_table_verbose_show_schema":"dbo.SA_QuoMain (销售报价单主表)","foreign_table_object_id":"t8191","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__SaleBillV__cPers__171946B0","title":null,"description":null,"is_user_defined":false,"foreign_table":"SaleBillVouch","foreign_table_show_schema":"dbo.SaleBillVouch","foreign_table_verbose":"SaleBillVouch (销售发票主表)","foreign_table_verbose_show_schema":"dbo.SaleBillVouch (销售发票主表)","foreign_table_object_id":"t8223","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__SalePayVo__cPers__180D6AE9","title":null,"description":null,"is_user_defined":false,"foreign_table":"SalePayVouch","foreign_table_show_schema":"dbo.SalePayVouch","foreign_table_verbose":"SalePayVouch (销售支出单主表)","foreign_table_verbose_show_schema":"dbo.SalePayVouch (销售支出单主表)","foreign_table_object_id":"t8229","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__SO_SOMain__cPers__19018F22","title":null,"description":null,"is_user_defined":false,"foreign_table":"SO_SOMain","foreign_table_show_schema":"dbo.SO_SOMain","foreign_table_verbose":"SO_SOMain (销售订单主表)","foreign_table_verbose_show_schema":"dbo.SO_SOMain (销售订单主表)","foreign_table_object_id":"t8325","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_AGBill_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_AGBill","foreign_table_show_schema":"dbo.SR_AGBill","foreign_table_verbose":"SR_AGBill (服务协议)","foreign_table_verbose_show_schema":"dbo.SR_AGBill (服务协议)","foreign_table_object_id":"t8340","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_AGFeedPlan_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_AGFeedPlan","foreign_table_show_schema":"dbo.SR_AGFeedPlan","foreign_table_verbose":"SR_AGFeedPlan (服务回访计划)","foreign_table_verbose_show_schema":"dbo.SR_AGFeedPlan (服务回访计划)","foreign_table_object_id":"t8341","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_AGJSBill_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_AGJSBill","foreign_table_show_schema":"dbo.SR_AGJSBill","foreign_table_verbose":"SR_AGJSBill (服务结算单)","foreign_table_verbose_show_schema":"dbo.SR_AGJSBill (服务结算单)","foreign_table_object_id":"t8342","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Complaint_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_Complaint","foreign_table_show_schema":"dbo.SR_Complaint","foreign_table_verbose":"SR_Complaint (客户投诉)","foreign_table_verbose_show_schema":"dbo.SR_Complaint (客户投诉)","foreign_table_object_id":"t8347","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Complaint_S_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_Complaint_S","foreign_table_show_schema":"dbo.SR_Complaint_S","foreign_table_verbose":"SR_Complaint_S (客户投诉表体)","foreign_table_verbose_show_schema":"dbo.SR_Complaint_S (客户投诉表体)","foreign_table_object_id":"t8348","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Feedback_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_Feedback","foreign_table_show_schema":"dbo.SR_Feedback","foreign_table_verbose":"SR_Feedback (服务回访)","foreign_table_verbose_show_schema":"dbo.SR_Feedback (服务回访)","foreign_table_object_id":"t8351","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cFeedbackPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Person_Req","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill (服务单)","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill (服务单)","foreign_table_object_id":"t8364","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cReqPersonCode"}],"custom_fields":{}},{"name":"FK_SR_Servicebill_Person_Ser","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceBill","foreign_table_show_schema":"dbo.SR_ServiceBill","foreign_table_verbose":"SR_ServiceBill (服务单)","foreign_table_verbose_show_schema":"dbo.SR_ServiceBill (服务单)","foreign_table_object_id":"t8364","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cSerPrincipalCode"}],"custom_fields":{}},{"name":"FK_SR_ServiceExpense_Person","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceExpense","foreign_table_show_schema":"dbo.SR_ServiceExpense","foreign_table_verbose":"SR_ServiceExpense (服务费用单)","foreign_table_verbose_show_schema":"dbo.SR_ServiceExpense (服务费用单)","foreign_table_object_id":"t8368","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK_SR_ServiceRequest_Person_Req","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceRequest","foreign_table_show_schema":"dbo.SR_ServiceRequest","foreign_table_verbose":"SR_ServiceRequest (服务请求)","foreign_table_verbose_show_schema":"dbo.SR_ServiceRequest (服务请求)","foreign_table_object_id":"t8374","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cReqPersonCode"}],"custom_fields":{}},{"name":"FK_SR_ServiceRequest_Person_Ser","title":null,"description":null,"is_user_defined":false,"foreign_table":"SR_ServiceRequest","foreign_table_show_schema":"dbo.SR_ServiceRequest","foreign_table_verbose":"SR_ServiceRequest (服务请求)","foreign_table_verbose_show_schema":"dbo.SR_ServiceRequest (服务请求)","foreign_table_object_id":"t8374","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cSerPrincipalCode"}],"custom_fields":{}},{"name":"FK__TransVouc__cPers__19F5B35B","title":null,"description":null,"is_user_defined":false,"foreign_table":"TransVouch","foreign_table_show_schema":"dbo.TransVouch","foreign_table_verbose":"TransVouch (库存调拨单主表)","foreign_table_verbose_show_schema":"dbo.TransVouch (库存调拨单主表)","foreign_table_object_id":"t9183","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person (职员档案)","primary_table_verbose_show_schema":"dbo.Person (职员档案)","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}}],"unique_keys":[{"name":"aaaaaPerson_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cPersonCode (职员编码)","name":"cPersonCode (职员编码)"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};