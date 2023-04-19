-- CreateTable
CREATE TABLE `Paciente` (
    `id_paciente` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(191) NOT NULL,
    `nascimento` VARCHAR(191) NOT NULL,
    `peso` VARCHAR(191) NOT NULL,
    `altura` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Paciente_nome_completo_key`(`nome_completo`),
    PRIMARY KEY (`id_paciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
